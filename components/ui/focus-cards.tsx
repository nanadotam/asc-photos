"use client"
import Image from "next/image"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onClick,
  }: {
    card: FocusCard
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
    onClick?: () => void
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link 
        href={card.url} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={(e) => {
          onClick?.()
        }}
      >
        <div
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-72 w-full transition-all duration-300 ease-out",
            "md:hover:shadow-lg",
            "border-2 border-transparent",
            hovered === index && "border-[#78212C]/70",
            // Only apply blur effect on non-mobile screens
            "md:only-apply-blur",
            hovered !== null && hovered !== index && "md:blur-sm md:scale-[0.98]",
          )}
        >
          <Image src={card.src || "/placeholder.svg"} alt={card.title} fill className="object-cover absolute inset-0" />

          {/* Always visible gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          {/* Content container - always visible on mobile, conditional on desktop */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-end py-6 px-4",
              // On mobile: always visible
              // On desktop: visibility controlled by hover
              "md:transition-opacity md:duration-300",
              "opacity-100", // Always visible on mobile
              hovered === index ? "md:opacity-100" : "md:opacity-100", // Desktop behavior
            )}
          >
            <div className="flex justify-between items-start">
              <div className="text-xl md:text-2xl font-medium text-white">{card.title}</div>
              <motion.div
                animate={hovered === index ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {card.description && (
              <motion.p
                // On mobile: always visible
                // On desktop: animated on hover
                initial={{ opacity: 1, y: 0 }} // Always visible on mobile
                animate={
                  // For desktop only
                  hovered === index ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 } // Always visible on mobile
                }
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-sm text-white/80 mt-2"
              >
                {card.description}
              </motion.p>
            )}

            {/* Photo count badge if available */}
            {card.photoCount && (
              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {card.photoCount} photos
              </div>
            )}
          </div>

          {/* Accent color on hover - desktop only */}
          <div
            className={cn(
              "absolute inset-0 bg-[#78212C]/20 transition-opacity duration-300",
              "opacity-0 md:only-apply-hover",
              hovered === index ? "md:opacity-100" : "md:opacity-0",
            )}
          />
        </div>
      </Link>
    </motion.div>
  ),
)

Card.displayName = "Card"

export type FocusCard = {
  id: number
  title: string
  src: string
  url: string
  description?: string
  photoCount?: number
}

interface FocusCardsProps {
  cards: FocusCard[]
  onCardClick?: (card: FocusCard) => void
}

export function FocusCards({ cards, onCardClick }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((card, index) => (
        <Card 
          key={card.id} 
          card={card} 
          index={index} 
          hovered={hovered} 
          setHovered={setHovered}
          onClick={() => onCardClick?.(card)}
        />
      ))}
    </div>
  )
}
