import { Clock3, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { sampleGigs } from "@/data/sampleGigs";

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
              20 polished example gigs with strong visuals for your demo marketplace
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            20 Examples
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {sampleGigs.map((gig, i) => (
            <motion.div
              key={gig.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={gig.image}
                  alt={`${gig.category} service by ${gig.freelancer}`}
                  loading="lazy"
                  width={1344}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
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
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star size={12} className="fill-accent text-accent" />
                      <span className="text-xs">
                        {gig.rating} ({gig.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-foreground text-sm leading-snug mb-4 line-clamp-2">
                  {gig.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-border gap-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 size={12} />
                    <span>{gig.deliveryTime}</span>
                  </div>
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
