"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        className="relative w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-full bg-gradient-to-br from-[#78212C] via-[#a52c3e] to-[#d44d5c] p-[3px]"
      >
        <div className="rounded-full overflow-hidden w-full h-full bg-background flex items-center justify-center">
          <Image
            src="/ASC LOGO PNG.png"
            alt="ASC Photo Hub"
            width={200}
            height={200}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  )
}
