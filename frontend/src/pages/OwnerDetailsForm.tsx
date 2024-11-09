
import React from 'react';
import Sidebar from '../components/Sidebar';

interface OwnerDetailsFormProps {
  currentStep: number;
  onBack: () => void;
}

const OwnerDetailsForm: React.FC<OwnerDetailsFormProps> = ({ currentStep, onBack }) => {
  return (
    <div className="owner-details-page flex flex-col sm:flex-row">
      <Sidebar currentStep={currentStep} />
      <div className="form-container p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Owner & Manager Details</h2>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold">Full Name *</label>
            <input
              type="text"
              placeholder="Eg. Prabhat Kumar, Sushma Singh"
              className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold">State *</label>
            <select className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Delhi</option>
              <option>UP</option>
              <option>Ap</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-semibold">City *</label>
            <input
              type="text"
              defaultValue="Delhi"
              className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold">Country</label>
            <input
              type="text"
              defaultValue="India"
              className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold">Address *</label>
            <input
              type="text"
              defaultValue="Domino's Pizza, Nagar, New Delhi"
              className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email with OTP Button */}
          <div className="relative">
            <label className="block text-sm font-semibold">E-mail *</label>
            <input
              type="email"
              defaultValue="apurvadubey@gmail.com"
              className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Send OTP
            </button>
          </div>

          {/* Mobile Number with OTP Button */}
          <div className="relative">
            <label className="block text-sm font-semibold">Mobile Number *</label>
            <input
              type="text"
              defaultValue="9876543210"
              className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Send OTP
            </button>
          </div>

          {/* Manager Details */}
          <div>
            <p className="text-sm font-semibold">Do you want to fill manager details?</p>
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                className="w-full sm:w-auto p-3 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                Yes
              </button>
              <button
                type="button"
                className="w-full sm:w-auto p-3 bg-red-500 text-white rounded hover:bg-red-600"
              >
                No
              </button>
            </div>
          </div>

          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="w-full bg-gray-600 text-white p-3 rounded mt-6 hover:bg-gray-700"
          >
            Back to Business Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerDetailsForm;
