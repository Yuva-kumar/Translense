


// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';

// interface BusinessInfoFormProps {
//   onProceed: () => void;
//   currentStep: number;
// }

// const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ onProceed, currentStep }) => {
//   const [businessName, setBusinessName] = useState('');
//   const [country, setCountry] = useState('India');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const [openingTime, setOpeningTime] = useState('');
//   const [closingTime, setClosingTime] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [otpSentEmail, setOtpSentEmail] = useState(false);
//   const [otpSentMobile, setOtpSentMobile] = useState(false);

//   const handleSendOtpEmail = () => {
//     setOtpSentEmail(true);
//     setTimeout(() => alert('OTP sent to Email'), 1000);
//   };

//   const handleSendOtpMobile = () => {
//     setOtpSentMobile(true);
//     setTimeout(() => alert('OTP sent to Mobile'), 1000);
//   };

//   return (
//     <div className="business-info-page flex flex-col sm:flex-row">
//       <Sidebar currentStep={currentStep} />
//       <div className="form-container p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto w-full">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Business Information</h2>
//         <form className="space-y-6">
//           <div>
//             <label className="block font-semibold">Business Name *</label>
//             <input
//               type="text"
//               value={businessName}
//               onChange={(e) => setBusinessName(e.target.value)}
//               placeholder="Enter your business name"
//               className="border p-3 rounded w-full"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Country *</label>
//             <select value={country} onChange={(e) => setCountry(e.target.value)} className="border p-3 rounded w-full">
//               <option>India</option>
//               <option>USA</option>
//               <option>Canada</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold">State *</label>
//             <input
//               type="text"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               placeholder="Enter your state"
//               className="border p-3 rounded w-full"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">City *</label>
//             <input
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               placeholder="Enter your city"
//               className="border p-3 rounded w-full"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Address *</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter your address"
//               className="border p-3 rounded w-full"
//             />
//           </div>

//           <div className="flex gap-4 flex-col sm:flex-row">
//             <div className="w-full sm:w-1/2">
//               <label className="block font-semibold">Opening Time *</label>
//               <input
//                 type="time"
//                 value={openingTime}
//                 onChange={(e) => setOpeningTime(e.target.value)}
//                 className="border p-3 rounded w-full bg-yellow-100 border-yellow-500"
//               />
//             </div>
//             <div className="w-full sm:w-1/2">
//               <label className="block font-semibold">Closing Time *</label>
//               <input
//                 type="time"
//                 value={closingTime}
//                 onChange={(e) => setClosingTime(e.target.value)}
//                 className="border p-3 rounded w-full bg-blue-100 border-blue-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block font-semibold">E-mail *</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="border p-3 rounded w-full"
//             />
//             <button
//               type="button"
//               onClick={handleSendOtpEmail}
//               className="ml-3 mt-2 p-2 bg-blue-500 text-white rounded shadow"
//             >
//               {otpSentEmail ? 'OTP Sent' : 'Send OTP'}
//             </button>
//           </div>

//           <div>
//             <label className="block font-semibold">Mobile Number *</label>
//             <input
//               type="tel"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="Enter your mobile number"
//               className="border p-3 rounded w-full"
//             />
//             <button
//               type="button"
//               onClick={handleSendOtpMobile}
//               className="ml-3 mt-2 p-2 bg-green-500 text-white rounded shadow"
//             >
//               {otpSentMobile ? 'OTP Sent' : 'Send OTP'}
//             </button>
//           </div>

//           <div>
//             <label className="block font-semibold">Upload Image of your Restaurant</label>
//             <input type="file" className="border p-3 rounded w-full" />
//           </div>

//           <button
//             type="button"
//             onClick={onProceed}
//             className="w-full bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700"
//           >
//             Proceed to Owner & Manager Details
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BusinessInfoForm;



import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import OtpInput from '../components/OtpInput';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BusinessInfoFormProps {
  onProceed: () => void;
  currentStep: number;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ onProceed, currentStep }) => {
  const [businessName, setBusinessName] = useState('');
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpSentEmail, setOtpSentEmail] = useState(false);
  const [otpSentMobile, setOtpSentMobile] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  // Define types for API responses
  interface ApiResponse {
    message: string;
  }

  // Function to send OTP
  async function sendOTP(email: string): Promise<void> {
    axios.post('http://localhost:8000/send-mail', { email })
      .then((res) => {
        console.log(res)
        toast.info('Check your mail!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error('Error', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      })
  }

  const handleImageUpload = async () => {
    if (!image) {
        console.error("No image file selected.");
        return;
    }

    const formData = new FormData();
    formData.append('image', image); // Ensure the field name is 'image' on the backend as well
    // console.log('FormData:', formData.get('image')); // Log to confirm image data

    try {
      const response = await axios.post('http://localhost:8000/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('image uploaded');
    } catch (error) {
      console.error("Error during upload:", error);
      toast.error('Image upload failed');
    }
  };

  // Function to verify OTP
  async function verifyOTP(): Promise<void> {
    await axios.post('http://localhost:8000/verify-otp', { otp, email })
      .then((res) => {
        console.log(res)
        toast.success('Successfully Registered!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error('Error', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      })
  }

  const handleSendOtpEmail = () => {

    setOtpSentEmail(true);
    sendOTP(email);
    // setTimeout(() => alert('OTP sent to Email'), 1000);
  };

  const handleSendOtpMobile = () => {
    setOtpSentMobile(true);
    setTimeout(() => alert('OTP sent to Mobile'), 1000);
  };

  return (
    <div className="business-info-page flex flex-col sm:flex-row">
      <ToastContainer />
      <Sidebar currentStep={currentStep} />
      <div className="form-container p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Business Information</h2>
        <form className="space-y-6">
          {/* Business Name */}
          <div>
            <label className="block font-semibold">Business Name *</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter your business name"
              className="border p-3 rounded w-4/5"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block font-semibold">Country *</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="border p-3 rounded w-4/5">
              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block font-semibold">State *</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your state"
              className="border p-3 rounded w-4/5"
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-semibold">City *</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
              className="border p-3 rounded w-4/5"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold">Address *</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="border p-3 rounded w-4/5"
            />
          </div>

          {/* Opening and Closing Time */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label className="block font-semibold">Opening Time *</label>
              <input
                type="time"
                value={openingTime}
                onChange={(e) => setOpeningTime(e.target.value)}
                className="border p-3 rounded w-full bg-yellow-100 border-yellow-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block font-semibold">Closing Time *</label>
              <input
                type="time"
                value={closingTime}
                onChange={(e) => setClosingTime(e.target.value)}
                className="border p-3 rounded w-full bg-blue-100 border-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block font-semibold">E-mail *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border p-3 rounded w-4/5"
            />
            <button
              type="button"
              onClick={handleSendOtpEmail}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded shadow"
            >
              {otpSentEmail ? 'OTP Sent' : 'Send OTP'}
            </button>
          </div>

          <div className="relative">
            <label className="block font-semibold">Enter Otp *</label>
            <input
              type="tel"
              value={otp}
              // onChange={(e) => setOtp((e)=>...otp,otp:e.target.value})}
              onChange={(e) => setOtp(e.target.value)}

              placeholder="Enter your otp"
              className="border p-3 rounded w-4/5"
            />
            <button
              type="button"
              onClick={verifyOTP}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded shadow"
            >
              {"verifyOTP"}
            </button>
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <label className="block font-semibold">Mobile Number *</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="border p-3 rounded w-4/5"
            />
            <button
              type="button"
              onClick={handleSendOtpMobile}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-green-500 text-white rounded shadow"
            >
              {otpSentMobile ? 'OTP Sent' : 'Send OTP'}
            </button>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block font-semibold">Upload Image of your Restaurant</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="border p-3 rounded w-4/5"
            />
            <button
              type="button"
              onClick={handleImageUpload}
              className="mt-2 p-2 bg-green-500 text-white rounded shadow"
            >
              Upload Image
            </button>
          </div>

          {/* Proceed Button */}
          <button
            type="button"
            onClick={onProceed}
            className="w-full bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700"
          >
            Proceed to Owner & Manager Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessInfoForm;
