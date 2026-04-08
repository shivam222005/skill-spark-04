import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const gigs = [
  {
    title: "I will design a modern website UI/UX",
    freelancer: "Sarah Chen",
    rating: 4.9,
    reviews: 342,
    price: 120,
    category: "Web Design",
    avatar: "SC",
  },
  {
    title: "I will build a full-stack React application",
    freelancer: "Alex Kumar",
    rating: 5.0,
    reviews: 189,
    price: 250,
    category: "Development",
    avatar: "AK",
  },
  {
    title: "I will create professional video editing",
    freelancer: "Maria Lopez",
    rating: 4.8,
    reviews: 567,
    price: 80,
    category: "Video",
    avatar: "ML",
  },
  {
    title: "I will write SEO-optimized content for your brand",
    freelancer: "James Wright",
    rating: 4.9,
    reviews: 421,
    price: 60,
    category: "Writing",
    avatar: "JW",
  },
];

const FeaturedGigs = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Featured Gigs
            </h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked by our team for exceptional quality
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gigs.map((gig, i) => (
            <motion.div
              key={gig.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Colored top bar */}
              <div className="h-32 bg-gradient-accent relative">
                <span className="absolute top-3 left-3 text-xs font-medium bg-card/90 backdrop-blur px-2.5 py-1 rounded-full text-foreground">
                  {gig.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                    {gig.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{gig.freelancer}</p>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="fill-accent text-accent" />
                      <span className="text-xs text-muted-foreground">
                        {gig.rating} ({gig.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-foreground text-sm leading-snug mb-4 line-clamp-2">
                  {gig.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">Starting at</span>
                  <span className="font-heading font-bold text-lg text-foreground">${gig.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGigs;
