"use client"
import { QueryClient, QueryClientProvider } from "react-query"
import "bootstrap/dist/css/bootstrap.css"
import "./globals.css"
import "swiper/css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  )
}
