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
      const containerWidth = containerRef.current.offsetWidth - 75;
      const containerHeight = containerRef.current.offsetHeight - 75;

      const randomTop = Math.floor(Math.random() * containerHeight);
      const randomLeft = Math.floor(Math.random() * containerWidth);

      setPosition({ top: randomTop, left: randomLeft });
      if (time >= maxTime) {
        setShouldMove(false);
      }
    }
  }, [time, maxTime]);

  useEffect(() => {
    moveButton();
  }, []);

  function handleClick() {
    if (!shouldMove) {
      onWin();
    }
  }

  return (
    <div className="h-full" ref={containerRef} style={{ position: "relative" }}>
      <button
        className="p-2 rounded-md font-bold absolute select-none"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          // background: "linear-gradient(90deg, red 0%, red 50%, white 50%)",
          // backgroundSize: "20px 40px",
        }}
        onMouseEnter={moveButton}
        onClick={handleClick}
      >
        <Image
          className="animate-bounce"
          width={75}
          height={75}
          src={waldoHat}
          alt="hat"
        ></Image>
      </button>
    </div>
  );
}
