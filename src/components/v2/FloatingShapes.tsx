"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  const shapes = [
    { 
      id: 1, 
      size: 80, 
      top: "15%", 
      left: "10%",
      duration: 20,
      delay: 0,
      rotate: 360
    },
    { 
      id: 2, 
      size: 60, 
      top: "60%", 
      left: "85%",
      duration: 25,
      delay: 2,
      rotate: -360
    },
    { 
      id: 3, 
      size: 100, 
      top: "75%", 
      left: "15%",
      duration: 30,
      delay: 4,
      rotate: 360
    },
    { 
      id: 4, 
      size: 50, 
      top: "25%", 
      left: "80%",
      duration: 22,
      delay: 1,
      rotate: -360
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border border-primary/30"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, shape.rotate],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}