"use client";
import { useEffect, useRef, useState } from "react";
import waldoHat from "../../assets/waldo-hat.png";
import Image from "next/image";

export default function () {
  const [time, setTime] = useState(0);
  const [segments, setSegments] = useState(["1", "1", "1"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(performance.now());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime(time: number) {
    // format the time like 3:59.16
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const milliseconds = time % 1000;
    return `${minutes.toFixed(0)}:${seconds.toFixed(0)}.${milliseconds.toFixed(
      0,
    )}`;
  }
  return (
    <div className="h-full grid-cols-2 grid">
      <div className="bg-black max-w-md text-white h-full flex justify-between flex-col">
        <div>
          <div className="text-center font-bold w-full p-4 bg-gradient-to-b from-white/20 to-white/5">
            Où est Charlie
          </div>
          <ul>
            {segments.map((segment, i) => {
              if (i === segments.length - 1) {
                return (
                  <li className="p-2 bg-gradient-to-b from-blue-800 to-blue-900">
                    {segment}
                  </li>
                );
              }
              if (i % 2 === 0) {
                return <li className="p-2 bg-white/10">{segment}</li>;
              }
              return <li className="p-2 bg-black">{segment}</li>;
            })}
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-green-800 text-7xl font-bold text-right">
            {formatTime(time)}
          </h1>
        </div>
      </div>
      <div className="h-full p-12 overflow-hidden relative">
        <ButtonAndCursorGame></ButtonAndCursorGame>
      </div>
    </div>
  );
}

function ButtonAndCursorGame() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);

  const moveButton = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const randomTop = Math.floor(Math.random() * containerHeight);
      const randomLeft = Math.floor(Math.random() * containerWidth);

      setPosition({ top: randomTop, left: randomLeft });
    }
  };

  useEffect(() => {
    moveButton();
  }, []);

  return (
    <div className="h-full" ref={containerRef} style={{ position: "relative" }}>
      <button
        className="bg-red-500 p-2 rounded-md font-bold absolute select-none h-12 w-12"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          background: "linear-gradient(90deg, red 0%, red 50%, white 50%)",
          backgroundSize: "20px 40px",
        }}
        onMouseEnter={moveButton}
      >
        <Image width={50} height={50} src={waldoHat} alt="hat"></Image>
      </button>
    </div>
  );
}
