import { Rocket } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Next Boilerplate Ai!
      </h1>
      <Rocket className="text-mint-9 h-24 w-24" />
    </div>
  )
}
