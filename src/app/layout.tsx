import { ApolloWrapper } from '@/features/core/client/components/ApolloWrapper'
import config from '@/features/core/config'
import '@/styles/tailwind.css'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: {
    template: '%s - Next Boilerplate Ai',
    default: 'Next Boilerplate Ai - The Unfair Advantage for Solo Founders.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="h-full bg-gray-100">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="h-full text-gray-950 antialiased">
        <SessionProvider>
          <Theme
            accentColor="mint"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="full"
          >
            <ApolloWrapper>{children}</ApolloWrapper>
          </Theme>
        </SessionProvider>
      </body>
      <GoogleAnalytics gaId={config.googleGaTag} />
    </html>
  )
}
