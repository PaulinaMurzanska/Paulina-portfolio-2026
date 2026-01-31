import { type IconType } from "react-icons";
import { Electron } from "./Electron";

interface OrbitProps {
  index: number;
  icon: IconType;
  iconColor: string;
}

export function Orbit({ index, icon, iconColor }: OrbitProps) {
  return (
    <div className={`orbit orbit-${index}`}>
      <Electron icon={icon} color={iconColor} orbitIndex={index} />
    </div>
  );
}
