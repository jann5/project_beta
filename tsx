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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
        </motion.div>
      </Suspense>
    </div>
  );
}