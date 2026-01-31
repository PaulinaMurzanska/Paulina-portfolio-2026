import { SiReact, SiTypescript, SiNextdotjs, SiVuedotjs } from "react-icons/si";
import { Orbit } from "./Orbit";
import "./atom.css";

// Configuration for the orbiting tech icons
const ORBIT_CONFIG = [
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiNextdotjs, color: "#000000" },
  { icon: SiVuedotjs, color: "#4FC08D" },
] as const;

export function AtomAnimation() {
  return (
    <div className="atom-container">
      <div className="atom">
        {ORBIT_CONFIG.map((config, index) => (
          <Orbit
            key={index}
            index={index + 1}
            icon={config.icon}
            iconColor={config.color}
          />
        ))}
      </div>
    </div>
  );
}
