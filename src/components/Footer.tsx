const Footer = () => {
  return (
    <footer className="bg-secondary py-14 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-xl font-bold text-secondary-foreground">
              Skill<span className="text-gradient">Bridge</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              The modern freelancing platform connecting talent with opportunity worldwide.
            </p>
          </div>

          {[
            { title: "For Clients", links: ["How to Hire", "Talent Marketplace", "Project Catalog", "Enterprise"] },
            { title: "For Freelancers", links: ["How to Find Work", "Create a Gig", "Community", "Resources"] },
            { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-secondary-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 SkillBridge. Built by Shivam. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-secondary-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
