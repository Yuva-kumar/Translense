// import React from 'react';

// interface TimePickerProps {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const TimePicker: React.FC<TimePickerProps> = ({ label, name, value, onChange }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
//     <input
//       type="time"
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// );

// export default TimePicker;


import React from 'react';

interface TimePickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ label, name, value, onChange }) => (
  <div className="mb-4 w-full max-w-xs mx-auto">
    <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
      {label}
    </label>
    <input
      type="time"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
    />
  </div>
);

export default TimePicker;
