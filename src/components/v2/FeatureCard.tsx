"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tagline?: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, tagline, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
    >
      <motion.div 
        className="text-5xl mb-4"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
        {title}
      </h3>
      
      {tagline && (
        <p className="text-sm font-semibold text-primary mb-3">
          {tagline}
        </p>
      )}
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}