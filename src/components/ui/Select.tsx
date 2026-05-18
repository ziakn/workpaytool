import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
};

export function Select({ options, className = "", ...props }: SelectProps) {
  return (
    <select className={`input ${className}`} {...props}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
