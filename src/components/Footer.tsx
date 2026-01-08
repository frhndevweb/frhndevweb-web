import { motion } from "framer-motion";
import { Github, Heart, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [displayCount, setDisplayCount] = useState<number>(0);

  useEffect(() => {
    
    const mockCount = 1247;
    setVisitorCount(mockCount);
  }, []);

  useEffect(() => {
    if (visitorCount === 0) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = visitorCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= visitorCount) {
        setDisplayCount(visitorCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visitorCount]);

  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Visitor counter */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Users className="w-4 h-4" />
              <span>Total Visitors</span>
            </div>
            <motion.div
              className="text-4xl md:text-5xl font-bold font-mono counter-glow text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {displayCount.toLocaleString()}
            </motion.div>
            <p className="text-xs text-muted-foreground/60">
              Tracked globally • Real-time
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* GitHub link */}
          <motion.a
            href="https://github.com/frhndevweb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span className="font-mono text-sm">@frhndevweb</span>
          </motion.a>

          {/* Copyright */}
          <motion.p
            className="flex items-center gap-2 text-sm text-muted-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> 
            </span>
            <span>•</span>
            <span>All rights reserved</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;