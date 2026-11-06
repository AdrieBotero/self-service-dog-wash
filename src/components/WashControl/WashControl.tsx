import type { WashMode } from "@pupwash/shared-types";
import { Bubbles, Droplet, PawPrint, Wind, Sparkles } from "lucide-react";

interface WashControlProps {
  label: string;
  mode: WashMode;
  isActive: boolean;
  isControlDisabled: boolean; 
  onSelectMode: (mode: WashMode) => void;
}

const washModeIcons = {
    soap: Bubbles,
    rinse: Droplet,
    conditioner: PawPrint,
    blowDryer: Wind,
    cleanTub: Sparkles
};


export function WashControl({ label, mode, isActive, isControlDisabled, onSelectMode }: WashControlProps) {
  return (
    <button className="wash-control" type="button" onClick={() => onSelectMode(mode)} disabled={isActive || isControlDisabled}>
      <p>{label}</p>
      <span className="wash-control-status">{isActive ? "ON" : "OFF"}</span>
    </button>
  );
}