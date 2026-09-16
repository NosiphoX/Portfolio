// components/ui/SkillCard.jsx
import { useState, useRef } from "react";
import TechChip from "./TechChip";
import MicroStage from "./skills/MicroStage";

function SkillCard({ skill }) {
  const { icon: Icon, category, title, description, technologies, accent, featured, type } = skill;
  const [isOpen, setIsOpen] = useState(!!featured);
  const cardRef = useRef(null);

  const handleTiltMove = (e) => {
    if (!featured || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty("--tilt-x", `${y * -6}deg`);
    cardRef.current.style.setProperty("--tilt-y", `${x * 6}deg`);
  };

  const resetTilt = () => {
    if (!featured || !cardRef.current) return;
    cardRef.current.style.setProperty("--tilt-x", "0deg");
    cardRef.current.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={cardRef}
      className={`skill-card-v2 ${featured ? "skill-card-v2--featured" : ""} ${isOpen ? "is-open" : ""}`}
      style={{ "--accent": accent }}
      onMouseEnter={() => !featured && setIsOpen(true)}
      onMouseLeave={() => { if (!featured) setIsOpen(false); resetTilt(); }}
      onMouseMove={handleTiltMove}
      onClick={() => !featured && setIsOpen((prev) => !prev)}
    >
      <div className="skill-card-v2__top">
        <span className="skill-card-v2__icon"><Icon width={20} height={20} /></span>
        <span className="skill-card-v2__category">{category}</span>
      </div>

      <h3 className="skill-card-v2__title">{title}</h3>
      <span className="skill-card-v2__divider" />

      {!isOpen && (
        <div className="skill-card-v2__stage">
          <MicroStage type={type} />
        </div>
      )}

      <div className="skill-card-v2__reveal">
        <p className="skill-card-v2__description">{description}</p>
        <div className="skill-card-v2__tech">
          {technologies.map((tech) => <TechChip key={tech} label={tech} />)}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;