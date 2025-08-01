import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface UseScrollAnimationProps {
  threshold?: number;
  staggerDelay?: number;
}

export const useScrollAnimation = ({ threshold = 0.1, staggerDelay = 0.2 }: UseScrollAnimationProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(scrollY, (value) => value);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return {
    ref,
    isInView,
    scrollDirection,
    scrollYProgress,
  };
};

export const useStaggeredAnimation = (index: number, staggerDelay: number = 0.2) => {
  const baseDelay = index * staggerDelay;
  
  return {
    initial: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95 
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: baseDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };
};

export const useScrollBasedAnimation = (ref: React.RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return { opacity, y, scale };
}; 