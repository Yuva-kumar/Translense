// // OwnerForm.tsx
// import React from 'react';

// const OwnerForm: React.FC = () => (
//   <div className="w-full max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
//     <h2 className="text-2xl font-bold mb-6">Owner Details</h2>
//     <form>
//       <div className="mb-6">
//         <label className="block text-gray-700">Owner Name *</label>
//         <input
//           type="text"
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700">Contact Number *</label>
//         <input
//           type="tel"
//           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full sm:w-auto mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none"
//       >
//         Submit
//       </button>
//     </form>
//   </div>
// );

// export default OwnerForm;


import React, { useState } from 'react';

const OwnerForm: React.FC = () => {
  const [ownerName, setOwnerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!ownerName || !contactNumber) {
      setError('All fields are required.');
      return;
    }
    
    // You can add more validation logic here (e.g., validate phone number format)
    
    // Handle form submission logic
    console.log('Owner Details:', { ownerName, contactNumber });
    setError('');
    // Proceed with next steps, like navigating to another page or submitting data.
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Owner Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700">Owner Name *</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Contact Number *</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full sm:w-auto mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OwnerForm;
