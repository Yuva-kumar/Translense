// // BusinessForm.tsx
// import React from 'react';

// const BusinessForm: React.FC = () => (
//   <div className="w-full max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
//     <h2 className="text-2xl font-bold mb-6">Business Information</h2>
//     <form>
//       <div className="mb-6">
//         <label className="block text-gray-700">Business Name *</label>
//         <input
//           type="text"
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700">Address *</label>
//         <input
//           type="text"
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full sm:w-auto mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none"
//       >
//         Next
//       </button>
//     </form>
//   </div>
// );

// export default BusinessForm;


import React, { useState } from 'react';

const BusinessForm: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Business Info:', { businessName, address });
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Business Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700">Business Name *</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Address *</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default BusinessForm;
