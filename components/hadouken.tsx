"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import fire from '@/assets/fire.gif'

const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] as const;
// const CODE = ['ArrowUp', 'ArrowUp'] as const;

export default function HadoukenWrapper({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const [lastKey, setLastKey] = useState<{ key: string }>({ key: "" });
  const divRef = useRef<HTMLDivElement>(null);
  const [streak, setStreak] = useState(0);
  const [hadouken, setHadouken] = useState(false);
  const triggerHit = useCallback(() => {
    const div = divRef.current;
    if (div) {
      div.classList.remove('animate-hit-left');
      void div.offsetWidth;
      div.classList.add('animate-hit-left');
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
      else {
        triggerHit();
      }
    } else
      setStreak(0);

  }, [lastKey])

  return (
    <>
      <div ref={divRef} className={twMerge("transition-all", hadouken && "hadouken-3d", className)}>
        {children}
      </div>
      {
        streak >= 1 && !hadouken && <img src={fire.src} alt="" className="fixed -bottom-20 z-10 pointer-events-none opacity-10 left-0 w-[30%] rotate-12 object-cover" />
      }
      {
        streak >= 2 && !hadouken && <img src={fire.src} alt="" className="fixed -bottom-20 z-10 pointer-events-none opacity-10 right-0 w-[40%] -rotate-12 object-cover" />
      }
      {
        streak >= 3 && !hadouken && <img src={fire.src} alt="" className="fixed -top-20 z-10 pointer-events-none opacity-20 -left-20 w-[30%] rotate-[150deg] object-cover" />
      }
      {
        streak >= 4 && !hadouken && <img src={fire.src} alt="" className="fixed -top-40 z-10 pointer-events-none opacity-30 -right-20 w-[50%] rotate-[-150deg] object-cover" />
      }
      {
        streak >= 5 && !hadouken && <img src={fire.src} alt="" className="fixed -bottom-[50%] z-10 pointer-events-none opacity-50 left-0 w-[100%] rotate-12 object-cover" />
      }
      {
        streak >= 6 && !hadouken && <img src={fire.src} alt="" className="fixed -top-[50%] z-10 pointer-events-none opacity-70 left-0 w-[100%] -rotate-[-190deg] object-cover" />
      }
      {
        streak >= 7 && !hadouken && <img src={fire.src} alt="" className="fixed top-0 bottom-0 z-10 pointer-events-none opacity-70 left-[-40%] w-[100%] rotate-[90deg] object-cover" />
      }
      {
        streak >= 8 && !hadouken && <img src={fire.src} alt="" className="fixed top-0 bottom-0 z-10 pointer-events-none opacity-90 right-[-40%] w-[100%] rotate-[-90deg] object-cover" />
      }
      {
        streak >= 9 && !hadouken && <img src={fire.src} alt="" className="fixed -bottom-[40%] z-10 pointer-events-none opacity-100 left-0 w-[200%] -rotate-12 object-cover" />
      }
      <div className="fixed top-0 left-0">
        <span className='bg-yellow-400 p-2'>{streak}</span>
      </div>
      {hadouken && <div className='fixed inset-0 -z-10 bg-red-500 flex items-center justify-center font-bold text-xl'>
        Hadouken!
      </div>}
      {
        hadouken && <button className='fixed top-0 right-0 p-6' onClick={() => setHadouken(false)}>
          close
        </button>
      }
    </>
  )
}