
import { useState, useEffect } from "react";

const phrases = ["clean code", "scalable apps", "responsive UI"];

function TerminalTyper() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <div className="micro-terminal">
      <span className="micro-terminal__prompt">const skills = "</span>
      <span className="micro-terminal__text">{text}</span>
      <span className="micro-terminal__cursor">|</span>
      <span className="micro-terminal__prompt">"</span>
    </div>
  );
}

export default TerminalTyper;