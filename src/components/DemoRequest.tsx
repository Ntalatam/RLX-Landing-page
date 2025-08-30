import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const SERVICE_ID = "service_le6pwxq";
const TEMPLATE_ID = "template_v84jude";
const PUBLIC_KEY = "T94cB7NfII7yD7JXB"; // Your EmailJS public key

const DemoRequest = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch(() => {
        setError("Failed to send request. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto">
        <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border">
          {sent ? (
            <div className="text-green-500 text-center font-semibold py-8">
              Thank you! Your demo request has been sent.
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                Request a Demo
              </h3>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input name="name" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input name="company" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="What would you like to see in the demo?"
                  className="min-h-[100px]"
                  required
                />
              </div>
              {error && <div className="text-red-500 text-center">{error}</div>}
              <Button type="submit" className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 neon-glow" disabled={loading}>
                {loading ? "Sending..." : "Request Demo"}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

export default DemoRequest;