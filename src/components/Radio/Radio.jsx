import React from 'react';

export  default function Radio ({ options, selectedOption, onChange }) {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="radioGroup"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}


