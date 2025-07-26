import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing for speed and user satisfaction"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Working effectively in agile team environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary animate-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Passionate About Creating
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated frontend developer with 1 year of experience building web applications 
            that users love. I combine technical expertise with creative design to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started as a curious student who loved solving problems with code. Over the years, 
                I've evolved into a versatile developer who enjoys working across the entire stack, 
                from database design to user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">What I Bring</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  1 year of professional development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Strong problem-solving and analytical skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Excellent communication and teamwork abilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Passion for continuous learning and improvement
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 hover:transform hover:scale-105 shadow-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;