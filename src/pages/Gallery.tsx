import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const galleryImages = [
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
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
    alt: "Warsztaty",
  },
  {
    src: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe5d?w=800&h=600&fit=crop&q=80",
    alt: "Notatki",
  },
  {
    src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80",
    alt: "Kawa i nauka",
  },
  {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop&q=80",
    alt: "Książki",
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Powrót
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Pełna Galeria</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
              <span className="sr-only">Zamknij</span>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full screen view"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}