import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata = {
  title: 'DMS',
  description: 'Document Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="min-h-screen flex">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main content area */}
            <div className="flex-1">
              {/* Header */}
              <Header />
              
              {/* Main content */}
              <main className="p-6">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}