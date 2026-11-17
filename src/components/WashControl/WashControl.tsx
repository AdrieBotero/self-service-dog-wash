import type { WashMode } from "@pupwash/shared-types";
import { Bubbles, Droplet, PawPrint, Wind, Sparkles } from "lucide-react";
import './WashControl.css'

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
  const Icon = washModeIcons[mode];
  return (
    <button className={`wash-control ${isActive? "is-active": ""}`} type="button" onClick={() => onSelectMode(mode)} disabled={isActive || isControlDisabled}>
      <Icon size={40} className={`wash-control-icon wash-control-icon--${mode}`} />
      <p>{label}</p>
      <span className="wash-control-status">{isActive ? "ON" : "OFF"}</span>
    </button>
  );
}