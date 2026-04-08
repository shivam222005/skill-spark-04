import { motion } from "framer-motion";
import { Shield, Zap, Globe, HeadphonesIcon } from "lucide-react";

const stats = [
  { icon: Shield, value: "50K+", label: "Verified Freelancers" },
  { icon: Zap, value: "1M+", label: "Projects Completed" },
  { icon: Globe, value: "190+", label: "Countries" },
  { icon: HeadphonesIcon, value: "24/7", label: "Support" },
];

const StatsSection = () => {
  return (
    <section id="why" className="py-20 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[20%] w-60 h-60 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon size={32} className="mx-auto mb-3 text-accent" />
              <p className="font-heading text-3xl md:text-4xl font-extrabold mb-1" style={{ color: "hsl(207, 30%, 96%)" }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: "hsl(207, 20%, 60%)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
