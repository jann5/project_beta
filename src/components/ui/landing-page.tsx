import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { 
  Sparkles, 
  Palette, 
  Zap, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

export function DesignAgency() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>Award-Winning Design Studio</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Transform Your Vision
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Into Reality
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We craft exceptional digital experiences that captivate audiences and drive results. 
              Let's build something extraordinary together.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <LiquidButton size="xl">
                Start Your Project
              </LiquidButton>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">What We Do Best</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Brand Identity",
                description: "Create memorable brands that resonate with your audience and stand out in the market."
              },
              {
                icon: Zap,
                title: "Digital Design",
                description: "Modern, responsive designs that deliver seamless experiences across all devices."
              },
              {
                icon: Users,
                title: "UX Strategy",
                description: "User-centered design approaches that maximize engagement and conversion."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-card border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Showcase Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Experimental UI Elements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pushing the boundaries of interaction design with our custom components
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
            <div className="flex flex-col items-center gap-6 p-8 rounded-xl bg-card border">
              <h3 className="text-xl font-semibold">Liquid Glass Effect</h3>
              <div className="relative h-[100px] w-full flex items-center justify-center">
                <LiquidButton>
                  Liquid Interaction
                </LiquidButton>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 p-8 rounded-xl bg-card border">
              <h3 className="text-xl font-semibold">Metal Finish</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <MetalButton variant="gold">Gold</MetalButton>
                <MetalButton variant="bronze">Bronze</MetalButton>
                <MetalButton variant="primary">Primary</MetalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Client Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Working with this team transformed our digital presence. Their attention to detail and creative approach exceeded all expectations."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Client Name</div>
                    <div className="text-sm text-muted-foreground">CEO, Company</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can bring your vision to life
            </p>
            
            <div className="max-w-md mx-auto space-y-4">
              <Input 
                placeholder="Your email address" 
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Textarea 
                placeholder="Tell us about your project" 
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
              {["Free Consultation", "Quick Response", "No Commitment"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}