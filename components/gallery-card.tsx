"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Gallery } from "@/lib/gallery-data"

interface GalleryCardProps {
  gallery: Gallery
  index: number
}

export default function GalleryCard({ gallery, index }: GalleryCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
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
        href={gallery.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block w-full rounded-xl p-6 transition-all duration-300 ease-in-out",
          "bg-gradient-to-br from-[#78212C]/90 to-[#78212C]/70",
          "hover:shadow-xl hover:scale-[1.03]",
          "border border-[#78212C]/20 dark:border-[#78212C]/40",
          "text-white",
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-center gap-4">
          {gallery.thumbnail && (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-white/30">
              <Image
                src={gallery.thumbnail || "/placeholder.svg"}
                alt={gallery.title}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-xl">{gallery.title}</h2>
              <motion.div
                animate={isHovering ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
              </motion.div>
            </div>
            {gallery.description && <p className="text-sm text-white/80 mt-2">{gallery.description}</p>}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
