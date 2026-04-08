import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Video,
  PenTool,
  BarChart3,
  Smartphone,
  Music,
  Globe,
} from "lucide-react";

const categories = [
  { icon: Code, label: "Development", count: "12,400+", span: "col-span-2 row-span-2" },
  { icon: Palette, label: "Design", count: "8,200+", span: "col-span-1 row-span-1" },
  { icon: Video, label: "Video & Animation", count: "5,800+", span: "col-span-1 row-span-1" },
  { icon: PenTool, label: "Writing", count: "9,100+", span: "col-span-1 row-span-2" },
  { icon: BarChart3, label: "Marketing", count: "6,500+", span: "col-span-1 row-span-1" },
  { icon: Smartphone, label: "Mobile Apps", count: "4,300+", span: "col-span-1 row-span-1" },
  { icon: Music, label: "Music & Audio", count: "3,200+", span: "col-span-1 row-span-1" },
  { icon: Globe, label: "AI Services", count: "7,600+", span: "col-span-1 row-span-1" },
];

const BentoCategories = () => {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through hundreds of categories to find the perfect freelancer for your project
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${cat.span} group relative rounded-xl bg-card border border-border p-6 cursor-pointer
                shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity" />
              <cat.icon className="text-primary mb-3" size={28} />
              <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{cat.label}</h3>
              <p className="text-muted-foreground text-sm">{cat.count} freelancers</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoCategories;
