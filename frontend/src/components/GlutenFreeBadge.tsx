import { motion } from "framer-motion";
import { Wheat } from "lucide-react";

interface GlutenFreeBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const GlutenFreeBadge = ({ size = "md", className = "" }: GlutenFreeBadgeProps) => {
  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-20 h-20 text-sm",
    lg: "w-28 h-28 text-base",
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
      className={`${sizeClasses[size]} ${className} relative flex flex-col items-center justify-center rounded-full bg-sage/25 border-2 border-sage shadow-soft`}
    >
      <div className="relative">
        <Wheat size={iconSizes[size]} className="text-secondary" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-0.5 bg-secondary rotate-45 transform origin-center" />
        </div>
      </div>
      <span className="font-semibold text-secondary mt-1 leading-tight text-center">
        {size === "lg" ? "SIN TACC" : "0% TACC"}
      </span>
    </motion.div>
  );
};

export default GlutenFreeBadge;
