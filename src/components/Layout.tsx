import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Expertise", path: "/expertise" },
  { label: "Leadership", path: "/leadership" },
  { label: "Meet the Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
            3BL<span className="text-accent">Studios</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact#inquiry-form"
              onClick={() => {
                if (location.pathname === "/contact") {
                  document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Button variant="cta" size="sm" className="ml-3">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border bg-card p-4 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact#inquiry-form"
              onClick={() => {
                setMobileOpen(false);
                if (location.pathname === "/contact") {
                  document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Button variant="cta" size="sm" className="w-full mt-2">
                Get Started
              </Button>
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy text-primary-foreground">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <span className="font-heading text-xl font-bold">
                3BL<span className="text-blueprint">Studios</span>
              </span>
              <p className="mt-3 text-sm text-steel max-w-md">
                Engineering-led BIM & constructability services for contractors across Europe and the Middle East. Supervised by U.S.-licensed professional engineers.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-steel">Navigation</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-steel hover:text-blueprint transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-steel">Contact</h4>
              <ul className="space-y-2 text-sm text-steel">
                <li>studios@3BLenterprises.com</li>
                <li>Monday – Friday</li>
                <li>Europe & Middle East hours</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-steel/20 text-center text-xs text-steel">
            © {new Date().getFullYear()} 3BL Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
