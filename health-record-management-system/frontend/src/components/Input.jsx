// src/components/Input.jsx
import React from "react";
import { Input as ShadInput } from "@/components/ui/input";

const Input = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <ShadInput
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full"
      />
    </div>
  );
};

export default Input;
