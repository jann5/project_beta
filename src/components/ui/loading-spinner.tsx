import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner = ({ className, fullScreen = true }: LoadingSpinnerProps) => {
  const Spinner = () => (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute w-16 h-16 border-4 border-primary/30 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className={cn("fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50", className)}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <Spinner />
    </div>
  );
};