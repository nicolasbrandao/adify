import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adify - Post',
  description: 'Adify - Post',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}