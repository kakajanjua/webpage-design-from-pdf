"use client"

import { useEffect, useRef, useState } from "react"

type ParallaxBackgroundProps = {
  /** Background image URL */
  image: string
  /** How strongly the layer moves relative to scroll. 0 = fixed, 1 = normal scroll. Default 0.3 */
  speed?: number
  className?: string
}

export function ParallaxBackground({
  image,
  speed = 0.3,
  className,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let frame = 0

    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // Only translate while the element is near the viewport
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      // Distance of the element's top from the viewport top, scaled down
      setOffset(rect.top * -speed)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <div
        className="absolute inset-0 -top-24 -bottom-24 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />
    </div>
  )
}
