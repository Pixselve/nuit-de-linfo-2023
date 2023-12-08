import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import waldoHat from "@/assets/button.webp";

export default function ({
  onWin,
  maxTime,
  time,
}: {
  onWin: () => void;
  maxTime: number;
  time: number;
}) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMove, setShouldMove] = useState(true);

  const moveButton = useCallback(() => {
    if (!shouldMove) return;

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth - 100;
      const containerHeight = containerRef.current.offsetHeight - 100;

      const randomTop = Math.floor(Math.random() * containerHeight);
      const randomLeft = Math.floor(Math.random() * containerWidth);

      setPosition({ top: randomTop, left: randomLeft });
      if (time >= maxTime) {
        setShouldMove(false);
      }
    }

    const randomMessage = Math.floor(Math.random() * messages.length);
    setBubbleMessage(messages[randomMessage]);
  }, [time, maxTime]);

  useEffect(() => {
    moveButton();
  }, []);

  function handleClick() {
    if (!shouldMove) {
      onWin();
    }
  }

  const messages = [
    "Essayes encore !",
    "Tu y es presque !",
    "À ce rythme tu vas y arriver !",
    "Tu es sur la bonne voie !",
    "Tu es le meilleur !",
    "Tu es un génie !",
    "Tu es incroyable !",
    "Tu es un champion !",
    "Ramènes Charlie à la maison !",
  ];

  const [bubbleMessage, setBubbleMessage] = useState(messages[0]);

  return (
    <div className="h-full" ref={containerRef} style={{ position: "relative" }}>
      <button
        className="p-2 rounded-md font-bold absolute select-none"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
        }}
        onMouseEnter={moveButton}
        onClick={handleClick}
      >
        <Image
          className="animate-bounce"
          width={100}
          height={100}
          src={waldoHat}
          alt="hat"
        ></Image>
        <style jsx>{`
          button::after {
            content: "${bubbleMessage}";
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            white-space: nowrap;
          }
        `}</style>
      </button>
    </div>
  );
}
