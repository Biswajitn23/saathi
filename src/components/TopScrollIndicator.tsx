import { motion, useScroll, useSpring } from "framer-motion";

const TopScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-orange-500/90 origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
};

export default TopScrollIndicator;
