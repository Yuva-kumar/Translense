import React, { useState } from 'react';

const OtpInput: React.FC<{ email: string }> = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOtpSubmit = () => {
    if (otp === '1234') {
      alert('OTP Verified');
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <div className="mb-4 w-full max-w-md mx-auto">
      <label className="block text-sm font-semibold text-gray-700 mb-2">OTP Verification</label>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        onClick={handleOtpSubmit}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md mt-3 hover:bg-indigo-600 transition duration-200 ease-in-out"
      >
        Verify OTP
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default OtpInput;
