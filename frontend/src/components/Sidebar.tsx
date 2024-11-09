


// /// src/components/Sidebar.tsx
// import React, { useState } from 'react';

// interface SidebarProps {
//   currentStep: number;
// }

// const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
//   const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility

//   const steps = [
//     "Business Information",
//     "Owner & Manager Details",
//     "PAN/Aadhaar Details",
//     "Legal Documents",
//     "Bank Details",
//     "Service Info",
//     "Preview Document",
//     "Reach Increased",
//   ];

//   return (
//     <aside
//       className={`bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md w-full sm:w-64 lg:w-72 mb-4 sm:mb-0 sm:mr-8 transition-all duration-300 ${isOpen ? 'block' : 'hidden'} sm:block`}
//     >
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="sm:hidden text-gray-800 absolute top-4 right-4 focus:outline-none"
//       >
//         {isOpen ? '✖' : '☰'}
//       </button>

//       <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Partner with Us</h3>
//       <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
//         Be our partner in just a few steps and start increasing your reach by gaining new customers.
//       </p>
//       <ul className="space-y-1 sm:space-y-2">
//         {steps.map((step, index) => (
//           <li
//             key={index}
//             className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 
//               ${index + 1 === currentStep ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
//           >
//             <span
//               className={`mr-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
//                 index + 1 === currentStep ? 'bg-blue-500' : 'bg-gray-300'
//               }`}
//             ></span>
//             {index + 1}. {step}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4 sm:mt-6 h-1 w-full bg-gray-300 relative rounded-full">
//         <div
//           className="bg-blue-500 h-1 rounded-full transition-all duration-300"
//           style={{ width: `${(currentStep / steps.length) * 100}%` }}
//         ></div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';

interface SidebarProps {
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility

  const steps = [
    "Business Information",
    "Owner & Manager Details",
    "PAN/Aadhaar Details",
    "Legal Documents",
    "Bank Details",
    "Service Info",
    "Preview Document",
    "Reach Increased",
  ];

  return (
    <aside
      className={`bg-orange-200 p-4 sm:p-6 rounded-lg shadow-md w-full sm:w-64 lg:w-72 mb-4 sm:mb-0 sm:mr-8 transition-all duration-300 ${
        isOpen ? 'block' : 'hidden'
      } sm:block`}
    >
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-gray-800 absolute top-4 right-4 focus:outline-none"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Partner with Us</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        Be our partner in just a few steps and start increasing your reach by gaining new customers.
      </p>
      
      <ul className="space-y-1 sm:space-y-2">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              index + 1 === currentStep ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span
              className={`mr-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                index + 1 === currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></span>
            {index + 1}. {step}
          </li>
        ))}
      </ul>

      {/* Progress bar */}
      <div className="mt-4 sm:mt-6 h-1 w-full bg-gray-300 relative rounded-full">
        <div
          className="bg-blue-500 h-1 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
