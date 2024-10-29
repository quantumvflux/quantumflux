import { useEffect, useRef } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed = 25 }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let i = 0;
    const element = textRef.current;

    if (!element) return;

    element.innerHTML = "";

    const writeChar = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        timeoutRef.current = window.setTimeout(writeChar, speed);
      }
    };

    writeChar();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed]);

  return <div ref={textRef} />;
};
