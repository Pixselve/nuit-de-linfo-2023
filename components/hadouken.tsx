"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] as const;
const CODE = ['ArrowUp', 'ArrowUp'] as const;

export default function HadoukenWrapper({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const [lastKey, setLastKey] = useState<{ key: string }>({ key: "" });
  const divRef = useRef<HTMLDivElement>(null);
  const [streak, setStreak] = useState(0);
  const [hadouken, setHadouken] = useState(false);
  const triggerHit = useCallback(() => {
    const div = divRef.current;
    if (div) {
      div.className = "";
      void div.offsetWidth;
      div.className = "animate-hit-left";
    }
  }, [streak, divRef])


  useEffect(() => {
    // keydown event listener
    const onKeyDown = (e: KeyboardEvent) => {
      setLastKey(e);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [])

  useEffect(() => {
    // Check for konami code
    // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    if (lastKey.key === CODE[streak]) {
      setStreak(streak + 1);
      if (streak == CODE.length - 1)
        setHadouken(true);
      triggerHit();
    } else
      setStreak(0);

  }, [lastKey])

  return (
    <>
      <div className="absolute top-0 left-0">
        <span className='bg-yellow-400'>{streak}</span>
      </div>
      {hadouken && <div>
        Hadouken!
      </div>}
      {
        hadouken && <button className='absolute top-0 right-0' onClick={() => setHadouken(false)}>
          close
        </button>
      }
      <div ref={divRef} className={twMerge('transform-gpu', hadouken && "hadouken-3d", className) }>
        {children}
      </div>
    </>
  )
}