import { type IconType } from "react-icons";

interface ElectronProps {
  icon: IconType;
  color: string;
  orbitIndex: number;
}

export function Electron({ icon: Icon, color, orbitIndex }: ElectronProps) {
  return (
    <div className={`electron electron-${orbitIndex}`}>
      <div className="electron-icon">
        <Icon className="w-3 h-3" style={{ color }} />
      </div>
    </div>
  );
}
