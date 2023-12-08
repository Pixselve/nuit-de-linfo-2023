import { useState } from "react";
import Image from "next/image";
import patpat from "@/assets/pat-pat-hand.gif";

export default function ({ children }: { children: React.ReactNode }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorDisplayed, setIsCursorDisplayed] = useState(false);

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsCursorDisplayed(false)}
      onMouseEnter={() => setIsCursorDisplayed(true)}
    >
      {children}
      {isCursorDisplayed && (
        <Image
          height={50}
          width={50}
          src={patpat}
          alt="pat pat"
          className="pointer-events-none fixed w-12 h-12 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        />
      )}
    </div>
  );
}
