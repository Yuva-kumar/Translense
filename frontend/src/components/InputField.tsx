import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-4 w-full max-w-lg mx-auto">
    <label className="block text-sm font-semibold text-gray-700 mb-2 md:text-base lg:text-lg">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 
                 sm:text-base md:p-3 lg:p-4"
    />
  </div>
);

export default InputField;
