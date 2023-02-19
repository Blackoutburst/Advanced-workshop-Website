import { AnalyticsWrapper } from '@/components/Analytics'
import React from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
        <body className='bg-[#202020] scrollbar overflow-x-hidden'>
            <div className='w-screen h-full'>
                {children}
            </div>
            <AnalyticsWrapper />
        </body>
    </html>
  )
}
