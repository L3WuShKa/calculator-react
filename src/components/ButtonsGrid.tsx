import Button from "./Button";

interface Props {
  onButtonClick: (v: string) => void;
}

export default function ButtonsGrid({ onButtonClick }: Props) {
  const buttons = [
    "C", "←", "÷", "×",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "√",
    "0", ".", "="
  ];

  return (
    <div className="buttons-grid">
      {buttons.map((b) => (
        <Button key={b} label={b} onClick={onButtonClick} />
      ))}
    </div>
  );
}
