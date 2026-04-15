import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type UserType = "freelancer" | "client";

const getUserType = (value: unknown): UserType => (value === "client" ? "client" : "freelancer");

const getFullName = (user: User) => {
  const metadataName = typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name.trim() : "";

  if (metadataName) {
    return metadataName;
  }

  if (user.email) {
    return user.email.split("@")[0];
  }

  return "SkillBridge User";
};

export const ensureUserRecords = async (user: User) => {
  const userType = getUserType(user.user_metadata?.user_type);
  const fullName = getFullName(user);

  const { data: profile, error: profileLookupError } = await supabase
    .from("profiles")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileLookupError) {
    console.error("Failed to look up profile", profileLookupError);
    return;
  }

  if (!profile) {
    const { error: profileInsertError } = await supabase.from("profiles").insert({
      user_id: user.id,
      full_name: fullName,
      user_type: userType,
    });

    if (profileInsertError) {
      console.error("Failed to create profile", profileInsertError);
      return;
    }
  }

  if (userType === "freelancer") {
    const { data: freelancer, error: freelancerLookupError } = await supabase
      .from("freelancers")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (freelancerLookupError) {
      console.error("Failed to look up freelancer profile", freelancerLookupError);
      return;
    }

    if (!freelancer) {
      const { error: freelancerInsertError } = await supabase.from("freelancers").insert({
        user_id: user.id,
      });

      if (freelancerInsertError) {
        console.error("Failed to create freelancer profile", freelancerInsertError);
      }
    }

    return;
  }

  const { data: client, error: clientLookupError } = await supabase
    .from("clients")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (clientLookupError) {
    console.error("Failed to look up client profile", clientLookupError);
    return;
  }

  if (!client) {
    const { error: clientInsertError } = await supabase.from("clients").insert({
      user_id: user.id,
    });

    if (clientInsertError) {
      console.error("Failed to create client profile", clientInsertError);
    }
  }
};