import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Clock } from "lucide-react";
import { z } from "zod";
import heroPage5 from "@/assets/hero-page-5.png";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  projectType: z.string().min(1, "Please select a project type"),
  projectPhase: z.string().min(1, "Please select a project phase"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    projectType: "",
    projectPhase: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Inquiry submitted! We'll respond within one business day.");
    setForm({ fullName: "", company: "", email: "", projectType: "", projectPhase: "", message: "" });
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroPage5})` }}
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="container relative z-10 py-20 md:py-28 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            Start the <span className="text-gradient-brand">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-lg text-steel"
          >
            Engineering-led BIM support aligned to your project timelines and coordination requirements.
          </motion.p>
        </div>
      </section>

      <section id="inquiry-form" className="py-20 bg-background bg-grid-pattern">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Project Inquiry</h2>
              <p className="text-muted-foreground mb-8">
                Every engagement begins with scope clarity. Share a brief overview and our team will respond within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} className="mt-1.5" />
                    {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" value={form.company} onChange={(e) => updateField("company", e.target.value)} className="mt-1.5" />
                    {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="mt-1.5" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Project Type</Label>
                    <Select value={form.projectType} onValueChange={(v) => updateField("projectType", v)}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && <p className="text-destructive text-xs mt-1">{errors.projectType}</p>}
                  </div>
                  <div>
                    <Label>Project Phase</Label>
                    <Select value={form.projectPhase} onValueChange={(v) => updateField("projectPhase", v)}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select phase" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="preconstruction">Preconstruction</SelectItem>
                        <SelectItem value="design">Design Development</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="closeout">Closeout</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectPhase && <p className="text-destructive text-xs mt-1">{errors.projectPhase}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="mt-1.5" />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-4">Direct Communication</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-accent" />
                    studios@3BLenterprises.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    Monday – Friday
                  </div>
                  <p className="text-xs text-muted-foreground pl-7">
                    Aligned with Europe & Middle East time zones
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <p className="text-sm text-muted-foreground italic">
                  "Clear communication. Structured execution. We look forward to supporting your next project."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
