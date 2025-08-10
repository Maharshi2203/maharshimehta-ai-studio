import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, Sparkles, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Creating intuitive, user-friendly designs that enhance user experience and drive engagement.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Responsive Design",
        "Usability Testing"
      ],
      pricing: "Starting from ₹15,000"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Full-stack website creation using modern frameworks, HTML, CSS, JavaScript, and AI tools.",
      features: [
        "Custom Website Development",
        "React & TypeScript Applications",
        "Responsive Frontend Design",
        "Backend API Development",
        "Database Integration"
      ],
      pricing: "Starting from ₹25,000"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "App Development",
      description: "Creating intuitive mobile and web applications with modern technologies and best practices.",
      features: [
        "Progressive Web Apps",
        "React Native Applications",
        "Cross-platform Solutions",
        "App Store Deployment",
        "Performance Optimization"
      ],
      pricing: "Starting from ₹40,000"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI Integration",
      description: "Leveraging AI tools and prompt engineering for efficient development workflows and automation.",
      features: [
        "AI-Powered Features",
        "Chatbot Development",
        "Automation Solutions",
        "AI Content Generation",
        "Machine Learning Integration"
      ],
      pricing: "Custom Pricing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your requirements, target audience, and business goals."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building the solution with clean code, thorough testing, and continuous integration."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying the final product and providing ongoing support and maintenance."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              My <span className="hero-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to completion, I offer comprehensive digital solutions tailored to your needs. 
              Let's transform your ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={service.title} className={`glass-card border-0 h-full fade-in-up delay-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h3 className="font-display text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <p className="font-semibold text-lg mb-4">{service.pricing}</p>
                    <Button className="w-full btn-accent">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20 fade-in-up delay-3">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              My <span className="hero-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A structured approach to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={step.step} className={`text-center fade-in-up delay-${index + 4}`}>
                  <div className="glass-card p-6 mb-4">
                    <div className="font-display text-3xl font-bold text-primary mb-3">{step.step}</div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center fade-in-up delay-4">
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                I'm currently available for freelance projects and would love to help bring your vision to life. 
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-accent" asChild>
                  <a href="/contact">Start a Project</a>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href="/portfolio">View My Work</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;