import { ImageSlider } from '@/features/core/client/components/ImageSlider'
import { Rocket } from 'lucide-react'

export default function HomePage() {
  const images = [
    'https://images.unsplash.com/photo-1507238691740-ad44d819023f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542831371-29b0f74f945e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1550063873-ab79294dd33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Next Boilerplate Ai!
      </h1>
      <Rocket className="text-mint-9 h-24 w-24" />
      <ImageSlider images={images} />
    </div>
  )
}
