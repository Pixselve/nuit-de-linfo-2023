"use client"
import Image from "next/image";
import waldoDogImage from "../assets/waldo-dog.png";
import patpat from "../assets/pat-pat-hand.gif";
import {useState} from "react";

export default function () {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorDisplayed, setIsCursorDisplayed] = useState(false);

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };


  return <button onMouseMove={handleMouseMove} className="border-2 border-gray-300 p-4 shadow rounded-xl cursor-none relative" onMouseLeave={() => setIsCursorDisplayed(false)} onMouseEnter={() => setIsCursorDisplayed(true)}>
      <Image height={50} src={waldoDogImage} alt="waldo dog"></Image>
      {isCursorDisplayed && (
          <Image
              height={50}
              width={50}
              src={patpat}
              alt="pat pat"
              className="pointer-events-none fixed w-12 h-12 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: cursorPosition.x,
                top: cursorPosition.y
              }}
          />
      )}

    </button>


}
