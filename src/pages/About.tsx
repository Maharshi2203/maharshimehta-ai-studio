import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Building, Trophy, Code2 } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Internship at Neome.ai",
      duration: "60 days",
      description: "Gained hands-on experience in AI development and real-world applications."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "NASA Space Apps Challenge",
      duration: "2024",
      description: "Participated in the global hackathon focusing on space technology solutions."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "DAIICT Tic Tac Toe Hackathon",
      duration: "2024",
      description: "Developed innovative gaming solutions in a competitive environment."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Nirma University Hackathon 6.0",
      duration: "2024",
      description: "Showcased technical skills in rapid prototyping and development."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Odoo Hackathon",
      duration: "2024",
      description: "Explored enterprise software development with Odoo platform."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Real-time E-commerce Application",
      duration: "Ongoing",
      description: "Currently developing a comprehensive e-commerce solution for a freelancing client."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              About <span className="hero-text">Maharshi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate computer science student dedicated to creating innovative web solutions 
              and exploring the frontiers of AI-driven development.
            </p>
          </div>

          {/* Main Bio */}
          <div className="glass-card p-8 mb-12 fade-in-up delay-1">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-display text-2xl font-semibold mb-4">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Maharshi Mehta, a 3rd-year B.Tech Computer Science student at Indus University, 
                  graduating in 2027. My passion lies in the intersection of web development, app development, 
                  and AI prompt engineering, where I've been actively building innovative solutions for over 2 years.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm open to freelance opportunities and professional roles that challenge me to grow and 
                  contribute to meaningful projects. My approach combines technical expertise with creative 
                  problem-solving, always staying updated with the latest technologies and industry trends.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">B.Tech CSE</p>
                    <p className="text-sm text-muted-foreground">Indus University</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Graduation</p>
                    <p className="text-sm text-muted-foreground">2027</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">2+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Achievements */}
          <div className="fade-in-up delay-2">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Experience & <span className="hero-text">Achievements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((experience, index) => (
                <Card key={experience.title} className={`glass-card border-0 fade-in-up delay-${index + 3}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{experience.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{experience.title}</h3>
                        <p className="text-sm text-soft-orange font-medium mb-2">{experience.duration}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="mt-16 glass-card p-8 fade-in-up delay-3">
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Python, Databases</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">AI Tools</h3>
                <p className="text-sm text-muted-foreground">Prompt Engineering, Automation</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">UI/UX, Figma, Prototyping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;