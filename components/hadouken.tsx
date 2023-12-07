"use client";

import { useEffect, useState } from 'react'

export default function HadoukenWrapper({ children }: React.HTMLAttributes<HTMLDivElement>) {
  const [lastKeys, setLastKeys] = useState<string[]>([]);
  useEffect(() => {
    // keydown event listener
    const onKeyDown = (e: KeyboardEvent) => {
      setLastKeys((lastKeys) => [...lastKeys, e.key]);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [])

  return (
    <>
      <div className="absolute top-0 left-0">
        {/* show the last 10 characters pressed */}
        {lastKeys.slice(-10).map((key, index) => (
          <span key={index} className="bg-black/40 text-black px-1">{key}</span>
        ))}
      </div>
      {children}
    </>
  )
}