import { ImageSlider } from '@/features/core/client/components/ImageSlider'
import { TestimonialsSection } from '@/features/core/client/components/TestimonialsSection'
import { Footer } from '@/features/core/client/components/Footer'
import { Rocket } from 'lucide-react'

export default function HomePage() {
  const images = [
    'https://images.unsplash.com/photo-1507238691740-ad44d819023f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542831371-29b0f74f945e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1550063873-ab79294dd33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1507238691740-ad44d819023f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542831371-29b0f74f945e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1550063873-ab79294dd33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Next Boilerplate Ai!
      </h1>
      <Rocket className="text-mint-9 h-24 w-24" />

      <div className="w-[1000px] text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Explore Our Features
        </h2>
        <p className="mt-2 w-[1000px] text-[3rem] font-bold text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="mt-1 w-[1000px] text-[3rem] font-bold text-gray-600">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Curabitur pretium
          tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
          commodo pharetra, est eros bibendum elit, nec luctus magna felis
          sollicitudin mauris.
        </p>
      </div>

      <ImageSlider images={images} />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
