"use client";

import fire from '@/assets/fire.gif';
import thisisfine from '@/assets/thisisfine.gif';
import { motion } from 'framer-motion';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import GameIconsBootKick from './icons/GameIconsBootKick';
import GameIconsPunchBlast from './icons/GameIconsPunchBlast';
import MdiArrowLeftThick from './icons/MdiArrowLeftThick';
import ExtinguisherBody from './icons/ExtinguisherBody';
import ExtinguisherNose from './icons/ExtinguisherNose';
import smoke from "@/assets/smoke.png";
import Image from 'next/image';


const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] as const;

const ICONS: Record<typeof CODE[number], ReactNode>
  = {
  ArrowUp: <MdiArrowLeftThick className='w-full h-full rotate-90' />,
  ArrowDown: <MdiArrowLeftThick className='w-full h-full -rotate-90' />,
  ArrowLeft: <MdiArrowLeftThick className='w-full h-full' />,
  ArrowRight: <MdiArrowLeftThick className='w-full h-full rotate-180' />,
  b: <GameIconsPunchBlast className='w-full h-full p-1' />,
  a: <GameIconsBootKick className='w-full h-full' />,
}

const ANIMATIONS: Record<typeof CODE[number], string> = {
  ArrowUp: 'animate-hit-up',
  ArrowDown: 'animate-hit-down',
  ArrowLeft: 'animate-hit-left',
  ArrowRight: 'animate-hit-right',
  b: 'animate-hit-middle',
  a: 'animate-hit-middle',
}

const punchSfx = new Audio('/punch.mp3');
const finalPunchSfx = new Audio('/final_punch.mp3');
const fireLoop = new Audio('/fire-burning-loop.mp3');
fireLoop.loop = true;

export default function HadoukenWrapper({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const [lastKey, setLastKey] = useState<{ key: string }>({ key: "" });
  const [streak, setStreak] = useState(0);
  const [hadouken, setHadouken] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [nosePos, setNosePos] = useState({ x: 0, y: 0 });
  const [noseRot, setNoseRot] = useState(0);
  const [smokePositions, setSmokePositions] = useState<Array<{ x: number, y: number }>>([]);

  const extinguisherRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (dragging) {
      console.log('click');
      setSmokePositions([...smokePositions, { x: mousePos.x, y: mousePos.y }]);
    }
  }
  const triggerHit = useCallback(() => {
    const body = document.querySelector('body');

    if (body) {
      body.classList.remove('animate-hit-up', 'animate-hit-down', 'animate-hit-left', 'animate-hit-right', 'animate-hit-middle');
      void body.offsetWidth;
      body.classList.add(ANIMATIONS[CODE[streak]]);
    }
    if (hadouken)
      fireLoop.volume = 1;
    else
      fireLoop.volume = streak / 20;
    fireLoop.play();
    punchSfx.currentTime = 0;
    finalPunchSfx.currentTime = 0;
    if (streak == CODE.length - 1)
      finalPunchSfx.play();
    punchSfx.play();
  }, [streak])

  const streakList = useMemo(() => {
    const icons = [];
    for (let i = 0; i < streak; i++) {
      icons.push(
        <motion.div
          key={i}
          className='w-24 h-24 bg-black border-8 animate-shaking border-white text-red-500 rounded-full shadow-xl flex items-center justify-center'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >{ICONS[CODE[i]]}</motion.div>
      )
    }
    return icons;
  }, [streak])

  useEffect(() => {
    // mousemove event listener
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])

  useEffect(() => {
    // only when dragging
    if (dragging)
      window.addEventListener('click', handleClick);
    else
      window.removeEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, [dragging])

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

  useEffect(() => {
    // Check for mouse position
    if (hadouken && dragging) {
      const body = extinguisherRef.current;
      if (!body) return;
      const rect = body.getBoundingClientRect();
      const bodyPos = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }

      // rotation based on mouse position
      const dx = bodyPos.x - nosePos.x;
      const dy = bodyPos.y - nosePos.y;
      const angle = Math.atan2(dy, dx);
      setNoseRot(angle * 180 / Math.PI);
      setNosePos((prev) => ({
        x: prev.x * 0.9 + mousePos.x * 0.1,
        y: prev.y * 0.9 + mousePos.y * 0.1,
      }));
    }
  }, [mousePos, dragging])

  return (
    <>
      <div className={twMerge("transition-all relative h-full overflow-hidden", hadouken && "hadouken-3d")}>
        <div className={className}>
          {children}
        </div>
        {
          (streak >= 1 || hadouken) && <img src={fire.src} alt="" className="fixed -bottom-20 z-10 pointer-events-none opacity-10 left-0 w-[30%] rotate-12 object-cover" />
        }
        {
          (streak >= 2 || hadouken) && <img src={fire.src} alt="" className="fixed -bottom-20 z-10 pointer-events-none opacity-10 right-0 w-[40%] -rotate-12 object-cover" />
        }
        {
          (streak >= 3 || hadouken) && <img src={fire.src} alt="" className="fixed -top-20 z-10 pointer-events-none opacity-20 -left-20 w-[30%] rotate-[150deg] object-cover" />
        }
        {
          (streak >= 4 || hadouken) && <img src={fire.src} alt="" className="fixed -top-40 z-10 pointer-events-none opacity-30 -right-20 w-[50%] rotate-[-150deg] object-cover" />
        }
        {
          (streak >= 5 || hadouken) && <img src={fire.src} alt="" className="fixed -bottom-[50%] z-10 pointer-events-none opacity-50 left-0 w-[100%] rotate-12 object-cover" />
        }
        {
          (streak >= 6 || hadouken) && <img src={fire.src} alt="" className="fixed -top-[50%] z-10 pointer-events-none opacity-70 left-0 w-[100%] -rotate-[-190deg] object-cover" />
        }
        {
          (streak >= 7 || hadouken) && <img src={fire.src} alt="" className="fixed top-0 bottom-0 z-10 pointer-events-none opacity-70 left-[-40%] w-[100%] rotate-[90deg] object-cover" />
        }
        {
          (streak >= 8 || hadouken) && <img src={fire.src} alt="" className="fixed top-0 bottom-0 z-10 pointer-events-none opacity-90 right-[-40%] w-[100%] rotate-[-90deg] object-cover" />
        }
        {
          (streak >= 9 || hadouken) && <img src={fire.src} alt="" className="fixed -bottom-[40%] z-10 pointer-events-none opacity-100 left-0 w-[200%] -rotate-12 object-cover" />
        }
      </div>
      <div className="fixed top-0 left-0 right-0 pointer-events-none justify-center z-10 flex gap-2 p-4">
        {streakList}
      </div>
      {hadouken &&
        <motion.div
          ref={extinguisherRef}
          className='absolute top-0 right-0 w-40 z-20 animate-tilt cursor-pointer'
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          onMouseDown={() => setDragging(true)}
          onClick={() => setDragging(true)}
        >
          <ExtinguisherBody className='w-40' />
        </motion.div>
      }
      {
        dragging &&
        <>
          <div className='absolute w-40 z-20 select-none pointer-events-none' style={{
            left: nosePos.x, top: nosePos.y,
            transform: `rotate(${noseRot + 90}deg)`,
            transformOrigin: 'top left',
          }}>
            <ExtinguisherNose className='w-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 transform'
            />
          </div>
          {/* Draw a line between the nose and body */}
          <svg className='absolute inset-0 pointer-events-none z-10' style={{ height: '100%', width: '100%' }}>
            <line
              x1={extinguisherRef.current ? (extinguisherRef.current.getBoundingClientRect().left + extinguisherRef.current.offsetWidth / 2) : 0}
              y1={extinguisherRef.current ? (extinguisherRef.current.getBoundingClientRect().top + extinguisherRef.current.offsetHeight / 2) - 30 : 0}
              x2={nosePos.x}
              y2={nosePos.y}
              stroke="#353d2e"
              strokeWidth="20"
            />
          </svg>
          {
            smokePositions.map((pos, index) => (
              <Smoke key={index} initPos={{ x: pos.x, y: pos.y }} />
            ))
          }
        </>
      }
      {hadouken && <div className='fixed inset-0 -z-10 bg-red-500 flex items-center select-none pointer-events-none justify-center font-bold text-xl'>
        <img src={thisisfine.src} alt="" className="w-full h-full object-cover select-none pointer-events-none" draggable={false} />
      </div>}
      {
        hadouken && <button className='fixed top-0 right-0 p-6' onClick={() => setHadouken(false)}>
          close
        </button>
      }
    </>
  )
}

function Smoke({ initPos }: { initPos: { x: number, y: number } }) {

  return <motion.div
    className='absolute w-20 animate-tilt'
    style={{ left: initPos.x, top: initPos.y }}
    initial={{ scale: 0, y: 0 }}
    animate={{ scale: 1, y: 1000 }}
    transition={{
      type: "spring",
      ease: "easeOut",
      duration: 3,
      stiffness: 260,
      damping: 20
    }}>
    <Image src={smoke.src} alt="" width={smoke.width} height={smoke.height}
      className="w-20 z-30 animate-tilt" style={{ left: initPos.x, top: initPos.y }} />
  </motion.div>

}
