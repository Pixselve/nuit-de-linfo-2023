"use client";
import Image from "next/image";
import waldo from "@/assets/charlie.png";
import formatTime from "@/lib/formatTime";
import { useEffect, useState } from "react";
import PatPat from "@/components/pat-pat";

export default function () {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const time = performance.now();
    setFormattedTime(formatTime(time));
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-white p-4 rounded-xl flex flex-col items-center gap-2">
        <PatPat>
          <Image src={waldo} alt="waldo" height={200}></Image>
        </PatPat>

        <h1 className="font-bold text-xl">
          Dire que Charlie était sur{" "}
          <span className="bg-gray-300 p-1 rounded-lg">/waldo</span> depuis le
          début.
        </h1>
        <h2>
          Même mon chat Wisker aurait mis moins de{" "}
          <span className="bg-red-300 p-1 rounded-lg">{formattedTime}</span>
          pour le trouver...
        </h2>
      </div>
    </div>
  );
}
