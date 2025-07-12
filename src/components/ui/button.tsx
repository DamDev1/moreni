"use client"; // <-- Add this directive at the top

import React from 'react';

type ButtonProps = {
  text: string;
  type: "outline" | "filled" | "light";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({ 
  text, 
  onClick, 
  type, 
  className = "", 
  disabled = false 
}: ButtonProps) {
  const baseClasses = "p-4 px-8 rounded transition-colors duration-300 cursor-pointer";
  
  const outlineClasses = "border border-primary text-primary hover:bg-[#F1A63C] hover:text-black";
  const filledClasses = "bg-[#F1A63C] hover:bg-[#e6952e] text-black";
  const lightClasses = "border hover:bg-[#e6952e] text-black";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${type === "outline" ? outlineClasses : type === "filled" ? filledClasses : lightClasses }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {text}
    </button>
  );
}