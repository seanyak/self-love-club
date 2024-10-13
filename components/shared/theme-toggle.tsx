'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()

  return (
    <button
      className='pt-3 pr-3 pb-3 pl-5 hover:rounded-sm hover:bg-muted'
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        })
      }}
    >
      {theme === 'dark' ? (
        <Moon strokeWidth={2} size={22} className='text-[#bec0e9]' />
      ) : (
        <Sun strokeWidth={2} size={22} className='text-[#fbf6d1]'/>
      )}
    </button>
  )
}
