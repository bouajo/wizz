"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Activity, FileText, Send, Users, Settings, ChevronDown } from 'lucide-react'

const menuItems = [
  { icon: Activity, label: 'Dashboard', href: '/' },
  { 
    icon: FileText, 
    label: 'Documents', 
    href: '/documents',
    subItems: [
      { label: 'Browse', href: '/documents' },
      { label: 'Generate', href: '/documents/generate' },
      { label: 'Send', href: '/send-document' },
    ]
  },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">DMS</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            subItems={item.subItems}
            isActive={pathname === item.href || (item.subItems?.some(subItem => pathname === subItem.href) ?? false)}
          />
        ))}
      </nav>
    </aside>
  )
}

interface SubItem {
  label: string
  href: string
}

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  isActive: boolean
  subItems?: SubItem[]
}

function SidebarItem({ icon: Icon, label, href, isActive, subItems }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Link
        href={href}
        className={`flex items-center px-6 py-3 text-gray-500 hover:bg-gray-100 ${
          isActive ? 'bg-gray-100 text-blue-600' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon size={20} />
        <span className="mx-3">{label}</span>
        {subItems && (
          <ChevronDown className={`ml-auto h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </Link>
      {subItems && isOpen && (
        <div className="ml-6 mt-2 space-y-2">
          {subItems.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className={`block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 text-blue-600' : ''
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
