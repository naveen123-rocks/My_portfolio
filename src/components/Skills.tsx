import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Express.js", level: 78 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Linux", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Responsive Design", level: 85 }
      ]
    }
  ];

  const technologies = [
    "React.js", "Next.js", "Tailwind CSS", "Redux", "Node.js", "MongoDB",
    "Express.js", "Git", "GitHub", "Linux", "JavaScript", "HTML5",
    "CSS3", "REST APIs", "VS Code", "Responsive Design", "Bootstrap", "NPM"
  ];

  return (
    <section id="skills" className="py-20  bg-background animate-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Skills & Technologies</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Tools I Work With
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Daily</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I use to bring ideas to life. 
            I'm always eager to learn new technologies and improve my skills.
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:animate-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground ">Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm text-orange-400 bg-card/50 hover:bg-card/80 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;