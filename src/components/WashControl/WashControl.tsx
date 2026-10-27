import type { WashMode } from "@pupwash/shared-types";


interface WashControlProps {
  label: string;
  mode: WashMode;
  isActive: boolean;
  onSelectMode: (mode: WashMode) => void;

}



export function WashControl({ label, mode, isActive, onSelectMode }: WashControlProps) {
  return (
    <button className="wash-control" type="button" onClick={() => onSelectMode(mode)} disabled={isActive ? true : false}>
      <p>{label}</p>
      <span>{isActive ? "ON" : "OFF"}</span>
    </button>
  );
}