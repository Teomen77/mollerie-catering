"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroPhoto() {
  return (
    <div className="relative min-h-64 flex-1 overflow-hidden">
      <motion.div className="hero-drift absolute inset-0">
        <Image
          src="/photos/buffet.jpg"
          alt="Stellvertretendes Foto eines Buffets auf Leinen. Es zeigt nicht die Küche der mollerie."
          fill
          priority
          sizes="100vw"
          className="origin-center scale-[1.42] object-cover object-[center_46%]"
        />
      </motion.div>
    </div>
  );
}
