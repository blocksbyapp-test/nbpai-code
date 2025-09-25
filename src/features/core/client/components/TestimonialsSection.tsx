'use client'

import React from 'react'

interface Testimonial {
  quote: string
  author: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'This boilerplate saved us weeks of development time. The modular structure and pre-configured GraphQL setup are a game-changer for SaaS startups.',
    author: 'Jane Doe',
    title: 'CEO, Tech Innovators',
  },
  {
    quote:
      'The integration with Stripe and NextAuth is seamless. We were able to get our payment system up and running in no time. Highly recommended!',
    author: 'John Smith',
    title: 'CTO, Cloud Solutions',
  },
  {
    quote:
      'As a solo founder, having a solid foundation like this is invaluable. It allows me to focus on my product features instead of boilerplate code.',
    author: 'Alice Johnson',
    title: 'Founder, Creative Apps',
  },
  {
    quote:
      'The documentation is clear and concise, making it easy to understand the project structure and extend functionalities. A truly well-thought-out solution.',
    author: 'Robert Brown',
    title: 'Lead Developer, InnovateX',
  },
  {
    quote:
      'Finally, a boilerplate that truly understands the needs of modern SaaS development. The GraphQL-compose-mongoose integration is a lifesaver.',
    author: 'Emily White',
    title: 'Product Manager, GrowthHub',
  },
  {
    quote:
      'The performance is excellent, and the developer experience is top-notch. This boilerplate is now our go-to for all new projects.',
    author: 'Michael Green',
    title: 'Software Engineer, Apex Systems',
  },
]

export const TestimonialsSection = () => {
  return (
    <section className="w-full max-w-6xl py-16 text-center">
      <h2 className="mb-12 text-5xl font-bold text-gray-800">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <p className="mb-4 text-lg italic text-gray-700">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="font-semibold text-gray-900">
              - {testimonial.author}
            </p>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
