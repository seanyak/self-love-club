'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()

  return (
    <button
      className='pl-5 pr-3 hover:rounded-sm hover:bg-muted'
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        })
      }}
    >
      {theme === 'dark' ? (
        <Moon strokeWidth={2} size={22} />
      ) : (
        <Sun strokeWidth={2} size={22} />
      )}
    </button>
  )
}
