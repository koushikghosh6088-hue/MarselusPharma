import React from "react";

interface SpineTabProps {
  label: string;
}

export default function SpineTab({ label }: SpineTabProps) {
  return (
    <div className="spine-tab" aria-hidden="true">
      {label}
    </div>
  );
}
