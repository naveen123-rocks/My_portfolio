import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "naveenvasamsetti86@gmail.com",
      link: "mailto:naveenvasamsetti86@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7075158164",
      link: "tel:+917075158164"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Andhra Pradesh, Kakinada",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Let's Work
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Let's Connect</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and development. 
                Feel free to reach out through any of the channels above or use the contact form.
              </p>
            </div>

            <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2 text-foreground">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to call or send a message via LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:animate-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>





            <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
  // onSubmit={}
>
  <input type="hidden" name="access_key" value="a480134e-5262-4a59-82f6-3246afdc998e" />

  <div>
    <Input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
    />
  </div>

  <div>
    <Input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
    />
  </div>

  <div>
    <Textarea
      name="message"
      placeholder="Your Message"
      required
      rows={5}
      className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
    />
  </div>

  <Button
    type="submit"
    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow/80 transition-all duration-300"
  >
    <Send className="w-4 h-4 mr-2" />
    Send Message
  </Button>
</form>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;