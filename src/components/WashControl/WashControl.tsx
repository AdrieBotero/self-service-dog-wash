interface WashControlProps {
  label: string;
}

export function WashControl({ label }: WashControlProps) {
  return (
    <button className="wash-control" type="button">
      <p>{label}</p>
      <span>OFF</span>
    </button>
  );
}