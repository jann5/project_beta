import { lazy, Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { motion } from "framer-motion";

// Lazy load below-the-fold sections
const About = lazy(() => import("@/components/landing/About"));
const Whiteboard = lazy(() => import("@/components/landing/Whiteboard"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const Offer = lazy(() => import("@/components/landing/Offer"));
const Contact = lazy(() => import("@/components/landing/Contact"));
const Footer = lazy(() => import("@/components/landing/Footer"));

// Lazy load heavy UI components
const PortfolioGallery = lazy(() => import("@/components/ui/portfolio-gallery").then(module => ({ default: module.PortfolioGallery })));
const LocationMap = lazy(() => import("@/components/ui/expand-map").then(module => ({ default: module.LocationMap })));

export function DesignAgency() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="py-20 flex justify-center"><LoadingSpinner /></div>}>
        <About />
        <Whiteboard />
        <Testimonials />
        <Offer />
        
        {/* Gallery Section */}
        <PortfolioGallery 
          title="Galeria z zajęć"
          archiveButton={{
            text: "Zobacz całą galerię",
            href: "/gallery"
          }}
          images={[
            {
              src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
              alt: "Zajęcia grupowe",
            },
            {
              src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop&q=80",
              alt: "Materiały dydaktyczne",
            },
            {
              src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80",
              alt: "Sala lekcyjna",
            },
            {
              src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
              alt: "Nauka online",
            },
            {
              src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&q=80",
              alt: "Certyfikaty",
            },
            {
              src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
              alt: "Nauczanie indywidualne",
            },
            {
              src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80",
              alt: "Biblioteczka",
            },
            {
              src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
              alt: "E-learning",
            },
          ]}
        />

        {/* Location Section */}
        <section id="location" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lokalizacja</h2>
              <p className="text-muted-foreground text-lg">
                Zapraszam do mojej sali wykładowej
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <LocationMap />
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}