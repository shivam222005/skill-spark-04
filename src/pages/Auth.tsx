import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, User, Loader2 } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") === "signup" ? "signup" : "signin";
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">(defaultTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState<"freelancer" | "client">("freelancer");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/");
    });
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Welcome back!" });
      navigate("/");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });
    if (error) {
      setLoading(false);
      toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
      return;
    }
    // Create profile
    if (data.user) {
      await supabase.from("profiles").insert({
        user_id: data.user.id,
        full_name: fullName,
        user_type: userType,
      });
    }
    setLoading(false);
    toast({
      title: "Account created!",
      description: "Please check your email to verify your account before signing in.",
    });
    setMode("signin");
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "Password reset link has been sent." });
    }
  };

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <a href="/" className="font-heading text-2xl font-bold tracking-tight" style={{ color: "hsl(207, 30%, 96%)" }}>
            Skill<span className="text-gradient">Bridge</span>
          </a>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
          {mode === "forgot" ? (
            <>
              <button onClick={() => setMode("signin")} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft size={16} /> Back to sign in
              </button>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Reset Password</h2>
              <p className="text-muted-foreground text-sm mb-6">Enter your email to receive a reset link</p>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-accent text-primary-foreground" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="flex mb-6 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setMode("signin")}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${mode === "signin" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setMode("signup")}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${mode === "signup" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={mode === "signin" ? handleSignIn : handleSignUp} className="space-y-4">
                {mode === "signup" && (
                  <>
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <Input id="fullName" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} className="pl-10" required />
                      </div>
                    </div>
                    <div>
                      <Label>I want to</Label>
                      <div className="flex gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setUserType("freelancer")}
                          className={`flex-1 py-2.5 text-sm font-medium rounded-lg border transition-all ${userType === "freelancer" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
                        >
                          Work as Freelancer
                        </button>
                        <button
                          type="button"
                          onClick={() => setUserType("client")}
                          className={`flex-1 py-2.5 text-sm font-medium rounded-lg border transition-all ${userType === "client" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
                        >
                          Hire Talent
                        </button>
                      </div>
                    </div>
                  </>
                )}
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" required minLength={6} />
                  </div>
                </div>
                {mode === "signin" && (
                  <button type="button" onClick={() => setMode("forgot")} className="text-sm text-primary hover:underline">
                    Forgot password?
                  </button>
                )}
                <Button type="submit" className="w-full bg-gradient-accent text-primary-foreground" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
                  {mode === "signin" ? "Sign In" : "Create Account"}
                </Button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
