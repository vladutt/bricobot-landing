"use client"

import { usePathname } from 'next/navigation'
import Link from "next/link"
import { Home, FileText, Shield } from "lucide-react"

export function NavigationMenu() {
    const pathname = usePathname()

    const menuItems = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/terms-and-conditions', label: 'Terms', icon: FileText },
        { href: '/privacy-policy', label: 'Privacy', icon: Shield },
    ]

    return (
        <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 transition-colors ${
                            isActive
                                ? 'text-purple-400'
                                : 'text-white hover:text-purple-400'
                        }`}
                    >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                    </Link>
                )
            })}
        </div>
    )
}