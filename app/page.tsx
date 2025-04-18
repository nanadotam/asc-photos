"use client"

import { useEffect, useState } from "react"
import { getGalleryLinks } from "@/lib/gallery-data"
import ProfileHeader from "@/components/profile-header"
import ThemeToggle from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { FocusCards, type FocusCard } from "@/components/ui/focus-cards"

export default function Home() {
  const [galleryLinks, setGalleryLinks] = useState<FocusCard[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGalleryLinks()

      // Transform the gallery data to match the FocusCard format
      const focusCards = data.map((gallery) => ({
        id: gallery.id,
        title: gallery.title,
        src: gallery.thumbnail || "/placeholder.svg?height=400&width=600",
        url: gallery.url,
        description: gallery.description,
      }))

      setGalleryLinks(focusCards)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <ProfileHeader />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-center mt-8 mb-10"
        >
          ASC Photo Galleries
        </motion.h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-60 md:h-72 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <FocusCards cards={galleryLinks} />
        )}
      </div>
    </main>
  )
}
