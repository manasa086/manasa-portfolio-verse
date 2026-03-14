import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "manasa.somisetty06@gmail.com",
    href: "mailto:manasa.somisetty06@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (650) 441-6868",
    href: "tel:+16504416868",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sunnyvale, CA",
    href: undefined,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_6tk1ryb",
        "template_fkmi4cg",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "XBQitkDXx2g_b-DIC"
      );
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-6">
          <p className="section-label mb-3">Get In Touch</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let's Connect
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            I'm actively looking for internship and full-time opportunities.
            Whether you have a role, a project idea, or just want to say hi — my
            inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact items */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary rounded-lg shrink-0 group-hover:bg-primary/10 transition-colors">
                    <info.icon className="h-4.5 w-4.5 text-muted-foreground group-hover:text-primary transition-colors" style={{ width: "18px", height: "18px" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/manasa-somisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary hover:bg-primary/5 hover:border-primary/30 text-sm font-medium text-foreground transition-all"
                >
                  <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
                <a
                  href="https://github.com/manasa086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary hover:bg-primary/5 hover:border-primary/30 text-sm font-medium text-foreground transition-all"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Availability banner */}
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-semibold text-emerald-800">Open to Opportunities</p>
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Actively seeking internships and full-time roles in full-stack,
                data engineering, or AI. Open to remote and Bay Area positions.
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:col-span-3">
            <div className="clean-card rounded-2xl p-6 md:p-8">
              <h3
                className="text-lg font-bold text-foreground mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary rounded-lg"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@email.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/50 border-border focus:border-primary rounded-lg"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-2.5 gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
