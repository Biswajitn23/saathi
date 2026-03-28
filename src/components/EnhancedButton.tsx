import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const EnhancedButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = "left",
}: EnhancedButtonProps) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 relative overflow-hidden";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 active:scale-95",
    secondary:
      "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50 active:scale-95",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/10 active:scale-95",
    ghost: "text-primary hover:bg-primary/10 active:scale-95",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-xs gap-1",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-3",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const buttonVariants = {
    rest: { scale: 1 },
    hover: disabled ? {} : { scale: 1.05 },
    tap: disabled ? {} : { scale: 0.95 },
  };

  const iconVariants = {
    rest: { x: 0 },
    hover: disabled ? {} : { x: iconPosition === "left" ? -4 : 4 },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className} inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {/* Gradient overlay for shine effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -left-full"
        animate={{
          left: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="relative z-10 inline-flex items-center justify-center gap-2">
        {icon && iconPosition === "left" && (
          <motion.span variants={iconVariants} className="inline-flex">
            {icon}
          </motion.span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <motion.span variants={iconVariants} className="inline-flex">
            {icon}
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default EnhancedButton;
