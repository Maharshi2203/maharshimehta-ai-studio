import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Palette, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/maharshi-hero.jpg";

const Index = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack development with modern frameworks and AI tools"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Creating intuitive mobile and web applications"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing beautiful and user-friendly interfaces"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Prompt Engineering",
      description: "Leveraging AI for efficient development workflows"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="glass-card inline-flex items-center px-4 py-2 text-sm fade-in-up">
                <div className="w-2 h-2 bg-soft-orange rounded-full mr-2"></div>
                Available for new opportunities
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight fade-in-up delay-1">
                Hey, <span className="hero-text italic">there</span>
              </h1>
              
              <div className="space-y-2 fade-in-up delay-2">
                <h2 className="font-display text-4xl lg:text-6xl font-bold">
                  I AM
                </h2>
                <h2 className="font-display text-4xl lg:text-6xl font-bold">
                  MAHARSHI
                </h2>
              </div>
            </div>

            <div className="space-y-4 fade-in-up delay-3">
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                3rd-year CSE student, web developer, and AI prompt engineer with 2+ years of experience building websites using AI and coding.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="btn-accent">
                    Hire Me <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="rounded-full px-8 py-3">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="glass-card p-4 float-animation">
                <img
                  src={heroImage}
                  alt="Maharshi Mehta - Web Developer and AI Prompt Engineer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-medium">
                DIGITAL PRODUCT DESIGNER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Specialized in <span className="hero-text">Modern Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Web Design, UX/UI, Webflow, and Front End Development with a passion for AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.title} className={`glass-card p-6 text-center fade-in-up delay-${index + 1}`}>
                <div className="text-primary mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
