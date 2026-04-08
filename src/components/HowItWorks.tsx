import { motion } from "framer-motion";
import { Search, UserCheck, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Discover",
    description: "Browse thousands of freelancers by skill, category, or budget.",
  },
  {
    icon: UserCheck,
    title: "Hire the Best",
    description: "Review portfolios, ratings, and hire the perfect match.",
  },
  {
    icon: CreditCard,
    title: "Pay Securely",
    description: "Escrow-based payments protect both parties.",
  },
  {
    icon: Rocket,
    title: "Get Results",
    description: "Receive quality work, review, and leave a rating.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in minutes — it's simple, fast, and secure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg">
                <step.icon size={28} className="text-primary-foreground" />
              </div>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-xs font-bold text-accent/40 font-heading">
                0{i + 1}
              </span>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
