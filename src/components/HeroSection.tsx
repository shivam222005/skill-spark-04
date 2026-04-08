import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-hero min-h-[85vh] flex items-center overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
          >
            The Future of Freelancing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ color: "hsl(207, 30%, 96%)" }}
          >
            Find Top Talent.
            <br />
            <span className="text-gradient">Build Anything.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-xl"
            style={{ color: "hsl(207, 20%, 72%)" }}
          >
            Connect with world-class freelancers and agencies to bring your vision
            to life. Quality work, on time, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder='Try "website design" or "mobile app"'
                className="w-full h-12 pl-11 pr-4 rounded-lg bg-card/10 backdrop-blur border border-white/10 text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              />
            </div>
            <Button className="h-12 px-8 bg-gradient-accent text-primary-foreground hover:opacity-90 font-semibold transition-opacity">
              Search
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 mt-10"
            style={{ color: "hsl(207, 20%, 60%)" }}
          >
            <span className="text-sm">Popular:</span>
            {["Web Design", "Logo", "React", "Video Editing"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-accent/40 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
