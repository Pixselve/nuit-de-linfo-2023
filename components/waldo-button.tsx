"use client";
import Image from "next/image";
import waldoDogImage from "../assets/waldo-dog.png";
import patpat from "../assets/pat-pat-hand.gif";
import { useState } from "react";
import Link from "next/link";
import PatPat from "@/components/pat-pat";

export default function () {
  return (
    <PatPat>
      <Link
        href="/not-waldo"
        className="inline-block border-2 border-gray-300 p-4 shadow rounded-xl cursor-none relative bg-white hover:shadow-lg transition-shadow"
      >
        <Image height={50} src={waldoDogImage} alt="waldo dog"></Image>
      </Link>
    </PatPat>
  );
}
