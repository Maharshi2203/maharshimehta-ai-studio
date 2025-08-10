import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Finance Tracker 'Dhanji'",
      description: "A comprehensive personal finance management application developed during the DAIICT Tic Tac Toe Hackathon. Features expense tracking, budget planning, and financial insights.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      links: {
        linkedin: "https://www.linkedin.com/posts/maharshi-mehta-7851b7287_hackathonproject-daiict-tictactoehackathon-activity-7317967725585166336-KbEH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWeapUBaytPo-saM57fc-5FSV32tqOvfD0"
      },
      status: "Completed"
    },
    {
      title: "Skill Swap Website",
      description: "A platform connecting people to exchange skills and knowledge. Built with modern web technologies focusing on user experience and community building.",
      image: "/api/placeholder/400/250",
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      links: {
        drive: "https://drive.google.com/file/d/1BirzLVrcSvHVi0iAefQRzc9-QSssZ8Wd/view?usp=sharing"
      },
      status: "Completed"
    },
    {
      title: "2D Solar System Orrery",
      description: "An interactive 2D visualization of our solar system built for the NASA Space Apps Challenge. Features accurate planetary movements and educational content.",
      image: "/api/placeholder/400/250",
      tags: ["JavaScript", "Canvas API", "CSS Animations", "Educational"],
      links: {
        live: "https://veevran.earth/"
      },
      status: "Live"
    },
    {
      title: "The Jam",
      description: "An innovative music collaboration platform currently in development. Focuses on connecting musicians and enabling remote collaboration.",
      image: "/api/placeholder/400/250",
      tags: ["React", "WebRTC", "Real-time", "Audio Processing"],
      links: {},
      status: "In Progress"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              My <span className="hero-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my journey in web development, from hackathon projects to real-world applications. 
              Each project represents a step forward in my technical growth.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`glass-card border-0 overflow-hidden hover:scale-105 transition-transform duration-300 fade-in-up delay-${index + 1}`}>
                <div className="aspect-video bg-gradient-to-br from-soft-orange to-warm-beige flex items-center justify-center text-white font-display text-xl">
                  {project.title}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-700' :
                      project.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-warm-beige text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.links.live && (
                      <Button size="sm" className="btn-accent" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.links.linkedin && (
                      <Button size="sm" variant="outline" className="rounded-full" asChild>
                        <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-1" /> View Post
                        </a>
                      </Button>
                    )}
                    {project.links.drive && (
                      <Button size="sm" variant="outline" className="rounded-full" asChild>
                        <a href={project.links.drive} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-1" /> Demo Video
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in-up delay-4">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-semibold mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <Button className="btn-accent" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;