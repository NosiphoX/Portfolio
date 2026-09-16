
import { useState, useEffect } from "react";

const words = ["GSAP", "Three.js", "WebXR", "Motion Design"];

function WordTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % words.length), 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="micro-ticker">
      <span className="micro-ticker__label">Currently exploring</span>
      <span key={index} className="micro-ticker__word">{words[index]}</span>
    </div>
  );
}

export default WordTicker;