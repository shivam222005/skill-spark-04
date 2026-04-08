import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-hero p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{ color: "hsl(207, 30%, 96%)" }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "hsl(207, 20%, 68%)" }}>
              Join thousands of freelancers and clients already building amazing things together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-accent text-primary-foreground hover:opacity-90 font-semibold px-8 transition-opacity">
                Find Talent
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 font-semibold px-8" style={{ color: "hsl(207, 30%, 96%)" }}>
                Become a Freelancer
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
