import React from "react";

interface Props { value: string; }

export default function Display({ value }: Props) {
  return (
    <div className="display" role="status" aria-live="polite">
      <div className="display-inner">
        <div className="display-value">{value}</div>
      </div>
      <div className="display-glow" aria-hidden="true" />
    </div>
  );
}
