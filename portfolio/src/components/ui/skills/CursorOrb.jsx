// components/ui/skills/CursorOrb.jsx
import { useRef, useState } from "react";

function CursorOrb() {
  const stageRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = stageRef.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <div className="micro-orb-stage" ref={stageRef} onMouseMove={handleMouseMove}>
      <span className="micro-orb" style={{ left: `${pos.x}%`, top: `${pos.y}%` }} />
    </div>
  );
}

export default CursorOrb;