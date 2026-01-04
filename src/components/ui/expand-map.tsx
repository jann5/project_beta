import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, X, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LocationMapProps {
  className?: string;
  address?: string;
  locationName?: string;
  googleMapsUrl?: string;
}

export function LocationMap({
  className,
  address = "Jesionowa 15, 64-550 Duszniki",
  locationName = "Sala bankietowa Halszka",
  googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Sala+bankietowa+Halszka+Jesionowa+15+Duszniki"
}: LocationMapProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Simplified query for better compatibility
  const mapQuery = encodeURIComponent(`${locationName}, ${address}`);

  return (
    <div className={cn("relative w-full max-w-3xl mx-auto", className)}>
      <motion.div 
        layout
        className={cn(
          "bg-card border shadow-xl overflow-hidden relative z-10",
          isExpanded ? "rounded-3xl fixed inset-4 md:inset-10 z-50 flex flex-col" : "rounded-2xl h-[300px] group cursor-pointer"
        )}
        onClick={!isExpanded ? toggleExpand : undefined}
      >
        {/* Header / Info Section */}
        <motion.div 
          layout="position" 
          className={cn(
            "bg-card p-6 flex items-start justify-between z-20 relative",
            isExpanded ? "border-b shadow-sm" : "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent pt-12"
          )}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{locationName}</h3>
              <p className="text-muted-foreground text-sm mt-1">{address}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {isExpanded && (
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 hidden sm:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(googleMapsUrl, '_blank');
                }}
              >
                <Navigation className="w-4 h-4" />
                Nawiguj
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
            >
              {isExpanded ? <X className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </Button>
          </div>
        </motion.div>

        {/* Map Content */}
        <div className={cn(
          "w-full bg-muted relative overflow-hidden",
          isExpanded ? "flex-1" : "h-full"
        )}>
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            loading="lazy"
            src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className={cn(
              "w-full h-full filter grayscale-[0.2] contrast-[1.1] transition-all duration-500",
              !isExpanded && "group-hover:scale-110 group-hover:grayscale-0"
            )}
            title="Lokalizacja"
          />
          
          {/* Overlay for collapsed state to indicate interactivity */}
          {!isExpanded && (
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <span className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Kliknij, aby powiększyć
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Backdrop for expanded state */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={toggleExpand}
          />
        )}
      </AnimatePresence>
    </div>
  );
}