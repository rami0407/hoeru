
import React from 'react';
import type { FeelingOption } from '../types';

interface FeelingSelectorProps {
  options: FeelingOption[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

const FeelingSelector: React.FC<FeelingSelectorProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-800 mb-3">اختر شعورك:</label>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300 ${
              selectedValue === option.id
                ? 'bg-teal-100 border-teal-500 shadow-lg'
                : 'bg-white border-gray-200 hover:border-teal-400'
            }`}
          >
            <span className="text-5xl mb-2">{option.emoji}</span>
            <span className="text-sm font-semibold text-gray-700">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeelingSelector;
