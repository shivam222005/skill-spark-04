
-- Create profiles table for all users
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  user_type TEXT NOT NULL CHECK (user_type IN ('freelancer', 'client')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create freelancers table
CREATE TABLE public.freelancers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  title TEXT,
  skills TEXT[],
  hourly_rate NUMERIC(10,2),
  experience_level TEXT CHECK (experience_level IN ('beginner', 'intermediate', 'expert')),
  portfolio_url TEXT,
  rating NUMERIC(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create clients table
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  company_name TEXT,
  industry TEXT,
  website TEXT,
  total_spent NUMERIC(12,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gigs table
CREATE TABLE public.gigs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  freelancer_id UUID REFERENCES public.freelancers(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  subcategory TEXT,
  price NUMERIC(10,2) NOT NULL,
  pricing_type TEXT NOT NULL CHECK (pricing_type IN ('fixed', 'hourly')),
  delivery_days INTEGER,
  tags TEXT[],
  thumbnail_url TEXT,
  is_active BOOLEAN DEFAULT true,
  total_orders INTEGER DEFAULT 0,
  rating NUMERIC(3,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.freelancers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gigs ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Freelancers policies
CREATE POLICY "Freelancer profiles are viewable by everyone" ON public.freelancers FOR SELECT USING (true);
CREATE POLICY "Users can insert their own freelancer profile" ON public.freelancers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own freelancer profile" ON public.freelancers FOR UPDATE USING (auth.uid() = user_id);

-- Clients policies
CREATE POLICY "Client profiles are viewable by everyone" ON public.clients FOR SELECT USING (true);
CREATE POLICY "Users can insert their own client profile" ON public.clients FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own client profile" ON public.clients FOR UPDATE USING (auth.uid() = user_id);

-- Gigs policies
CREATE POLICY "Active gigs are viewable by everyone" ON public.gigs FOR SELECT USING (true);
CREATE POLICY "Freelancers can create their own gigs" ON public.gigs FOR INSERT WITH CHECK (
  freelancer_id IN (SELECT id FROM public.freelancers WHERE user_id = auth.uid())
);
CREATE POLICY "Freelancers can update their own gigs" ON public.gigs FOR UPDATE USING (
  freelancer_id IN (SELECT id FROM public.freelancers WHERE user_id = auth.uid())
);
CREATE POLICY "Freelancers can delete their own gigs" ON public.gigs FOR DELETE USING (
  freelancer_id IN (SELECT id FROM public.freelancers WHERE user_id = auth.uid())
);

-- Indexes
CREATE INDEX idx_gigs_category ON public.gigs(category);
CREATE INDEX idx_gigs_freelancer ON public.gigs(freelancer_id);
CREATE INDEX idx_freelancers_skills ON public.freelancers USING GIN(skills);
CREATE INDEX idx_gigs_tags ON public.gigs USING GIN(tags);

-- Timestamp update function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_freelancers_updated_at BEFORE UPDATE ON public.freelancers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_gigs_updated_at BEFORE UPDATE ON public.gigs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
