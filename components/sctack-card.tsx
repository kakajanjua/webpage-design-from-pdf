"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface StackCardProps {
  children: React.ReactNode
  index: number
  totalCards: number
  className?: string
}

export function StackCard({ children, index, totalCards, className = "" }: StackCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll position for this specific card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smoothly scale down and fade out as the NEXT card scrolls over it
  const targetScale = 1 - (totalCards - index) * 0.04
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        // Stack index determines overlap order
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity: index === totalCards - 1 ? 1 : opacity, // Don't shrink the last card
        }}
        className={`h-full w-full shadow-2xl transition-shadow duration-300 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  )
}