import type { WashMode } from "@pupwash/shared-types";


interface WashControlProps {
  label: string;
  mode: WashMode;
  isActive: boolean;
  isControlDisabled: boolean; 
  onSelectMode: (mode: WashMode) => void;
}



export function WashControl({ label, mode, isActive, isControlDisabled, onSelectMode }: WashControlProps) {
  return (
    <button className="wash-control" type="button" onClick={() => onSelectMode(mode)} disabled={isActive || isControlDisabled}>
      <p>{label}</p>
      <span>{isActive ? "ON" : "OFF"}</span>
    </button>
  );
}