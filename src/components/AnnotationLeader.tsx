import React from "react";

interface AnnotationLeaderProps {
  title: string;
  description: string;
  accentColor?: string;
}

export default function AnnotationLeader({ title, description, accentColor = "var(--color-forest)" }: AnnotationLeaderProps) {
  return (
    <div className="annotation-leader">
      <div 
        className="annotation-dot" 
        style={{ backgroundColor: accentColor, boxShadow: `0 0 0 2px ${accentColor}` }} 
      />
      <div className="annotation-content">
        <h4 className="annotation-title" style={{ color: accentColor }}>{title}</h4>
        <p className="annotation-desc">{description}</p>
      </div>
    </div>
  );
}
