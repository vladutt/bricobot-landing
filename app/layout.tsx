import type { Metadata } from 'next'
import './globals.css'
import { Badge } from "@/components/ui/badge"
import {Bot, Github, Icon, MessageCircle} from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu } from '@/components/ui/navigation-menu'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'BricoBot',
  description: 'BricoBot helps BitCraft players coordinate professions, manage material requirements, and track deliveries with simple, team-friendly commands.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-purple-400" />
            <a href="/"> <span className="text-2xl font-bold text-white">BricoBot</span></a>
          </div>

          <NavigationMenu />

          <div className="text-center">
            <a href="https://github.com/vladutt/bricobot-landing" className="mr-3" target="_blank">
              <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              >
                <Github className="h-4 w-4 mr-2" />
                Edit on GitHub
              </Button>
            </a>

            <a href="https://discord.gg/sWdBut2P" target="_blank">
              <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Our Discord
              </Button>
            </a>
          </div>


        </nav>
      </header>

    {children}

      <footer className="container mx-auto px-4 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Bot className="h-6 w-6 text-purple-400" />
            <span className="text-white font-semibold">BricoBot</span>
            <Badge variant="secondary" className="ml-2">
              Beta
            </Badge>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
                href="/terms-and-conditions"
                className="flex items-center gap-2 transition-colors text-white hover:text-purple-400"
            >
              <Icon className="h-4 w-4" iconNode={[]} />
              <span>Terms</span>
            </Link>
            <Link
                href="/privacy-policy"
                className="flex items-center gap-2 transition-colors text-white hover:text-purple-400"
            >
              <Icon className="h-4 w-4" iconNode={[]} />
              <span>Privacy</span>
            </Link>
          </div>

          <p className="text-slate-500 text-sm">
            Built for the BitCraft community with ❤️ @
            <a
                className="font-semibold"
                href="https://www.linkedin.com/in/vladutteodor18/"
                target="_blank"
            >
              YzY
            </a>
          </p>
        </div>
      </footer>
    </div>
    </body>
    </html>
  )
}
