import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const SERVICE_ID = "service_le6pwxq";
const TEMPLATE_ID = "template_3tow1gd";
const USER_ID = "T94cB7NfII7yD7JXB";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  if (!formRef.current) return;

  const formData = new FormData(formRef.current);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to send message");
    setSent(true);
    setLoading(false);
    formRef.current?.reset();
  } catch {
    setError("Failed to send message. Please try again.");
    setLoading(false);
  }
};

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 flex flex-col ">
        <div className="text-center mb-16 flex-grow">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your supply chain risk management? Contact our team to discuss your 
            requirements and learn how we can help build more resilient operations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border">
            {sent ? (
              <div className="text-green-500 text-center font-semibold py-8">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input name="first_name" placeholder="John" className="bg-background border-border focus:border-primary focus:ring-primary" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input name="last_name" placeholder="Doe" className="bg-background border-border focus:border-primary focus:ring-primary" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input name="email" type="email" placeholder="john@company.com" className="bg-background border-border focus:border-primary focus:ring-primary" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input name="company" placeholder="Your Company" className="bg-background border-border focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <Input name="industry" placeholder="Aerospace, Defense, Manufacturing, Energy, etc." className="bg-background border-border focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your supply chain challenges and risk management needs..."
                    className="min-h-[120px] bg-background border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <Button type="submit" className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 neon-glow" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;