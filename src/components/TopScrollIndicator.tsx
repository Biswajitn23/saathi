import { useState, useEffect } from "react";

const TopScrollIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const newProgress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setProgress(newProgress);
      rafId = requestAnimationFrame(updateProgress);
    };

    rafId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-orange-500/90 z-[9999]"
      style={{ width: `${progress}%` }}
    />
  );
};

export default TopScrollIndicator;
