import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export const HoverCard = ({ children, className = "", delay = 0, onClick }: HoverCardProps) => {
  const hoverVariants = {
    initial: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(255, 170, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={hoverVariants}
      onClick={onClick}
      className={`transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AnimatedButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  size = "md",
}: AnimatedButtonProps) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-accent text-accent-foreground hover:bg-accent/80",
    outline: "border-2 border-primary text-primary hover:border-primary/70",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {/* Shimmer effect on hover */}
      <motion.span
        className="absolute inset-0 bg-white/20 -left-full group-hover:left-full transition-all duration-500 pointer-events-none"
        initial={{ left: "-100%" }}
        whileHover={{ left: "100%" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100"
        animate={{
          backgroundPosition: ["200% center", "-200% center"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default {
  HoverCard,
  AnimatedButton,
  GlowCard,
};
