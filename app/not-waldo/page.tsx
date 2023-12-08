"use client";
import { useEffect, useMemo, useState } from "react";
import PasswordGame from "@/components/games/password-game";
import ButtonAndCursorGame from "@/components/games/button-and-cursor-game";
import { useRouter } from "next/navigation";

export default function () {
  const [time, setTime] = useState(0);
  const [segments, setSegments] = useState<string[]>([]);

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
    const secondsLeft = seconds % 60;
    const milliseconds = Math.floor(time % 1000);
    return `${minutes}:${secondsLeft}.${milliseconds}`;
  }

  const [gameIndex, setGameIndex] = useState(0);

  const { push } = useRouter();

  function handleNextGame() {
    setSegments([...segments, formatTime(time)]);
    setGameIndex(gameIndex + 1);
  }

  function handleWin() {
    push("/waldo");
  }

  const gameComponent = useMemo(() => {
    switch (gameIndex) {
      case 0:
        return (
          <PasswordGame
            maxTime={60 * 1000}
            time={time}
            onWin={handleNextGame}
          ></PasswordGame>
        );
      case 1:
        return (
          <ButtonAndCursorGame
            onWin={handleWin}
            maxTime={3 * 60 * 1000}
            time={time}
          ></ButtonAndCursorGame>
        );
      default:
        return <div>game {gameIndex}</div>;
    }
  }, [gameIndex, time]);

  return (
    <div className="h-full flex ">
      <div className="bg-black w-[500px] text-white h-full flex justify-between flex-col">
        <div>
          <div className="text-center font-bold w-full p-4 bg-gradient-to-b from-white/20 to-white/5">
            Où est Charlie
          </div>
          <ul>
            {segments.map((segment, i) => {
              if (i === segments.length - 1) {
                return (
                  <li className="p-2 bg-gradient-to-b from-blue-800 to-blue-900 flex justify-between">
                    <span>{i + 1}</span>
                    <span>{segment}</span>
                  </li>
                );
              }
              if (i % 2 === 0) {
                return (
                  <li className="p-2 bg-white/10 flex justify-between">
                    <span>{i + 1}</span>
                    <span>{segment}</span>
                  </li>
                );
              }
              return (
                <li className="p-2 bg-black flex justify-between">
                  <span>{i + 1}</span>
                  <span>{segment}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-green-800 text-7xl font-bold text-right">
            {formatTime(time)}
          </h1>
        </div>
      </div>
      <div className="h-full p-12 overflow-hidden relative grow">
        {gameComponent}
      </div>
    </div>
  );
}
