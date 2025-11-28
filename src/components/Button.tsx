interface Props {
  label: string;
  onClick: (v: string) => void;
}

export default function Button({ label, onClick }: Props) {
  const type =
    ["+", "-", "×", "÷", "=", "√"].includes(label)
      ? "operator"
      : ["C", "←"].includes(label)
      ? "action"
      : "number";

  return (
    <button className={`btn btn-${type}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}
