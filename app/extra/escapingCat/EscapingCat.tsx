"use client";
import { useState, useEffect } from "react";
import "./Cat.css";
import { useAtom } from "jotai";
import { isGameCompleteAtom, isGamePlayingAtom } from "@/state/store";

export default function EscapingCat() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isGameComplete, setIsGameComplete] = useAtom(isGameCompleteAtom);
  const [isGamePlaying, setIsGamePlaying] = useAtom(isGamePlayingAtom);

  const moveCat = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const newX = Math.random() * (viewportWidth - 50) + scrollX;
    const newY = Math.random() * (viewportHeight - 50) + scrollY;

    setPosition({
      x: newX,
      y: newY,
    });
  };

  useEffect(() => {
    if (isGamePlaying) {
      const intervalId = setInterval(moveCat, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isGamePlaying]);

  const handleCatClick = () => {
    setIsGameComplete(true);
    setIsGamePlaying(false);
  };

  return (
    <div
      className={`cat ${isGamePlaying ? "" : "hidden"}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onClick={handleCatClick}
    >
      🐱
    </div>
  );
}
