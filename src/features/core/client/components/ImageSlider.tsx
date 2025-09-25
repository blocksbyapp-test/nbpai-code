'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ImageSliderProps {
  images: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export const ImageSlider = ({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, autoPlay, autoPlayInterval])

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-96 w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  )
}
