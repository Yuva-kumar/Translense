


// // src/App.tsx
// import React, { useState } from 'react';
// import BusinessInfoForm from './pages/BusinessInfoForm';
// import OwnerDetailsForm from './pages/OwnerDetailsForm';

// const App: React.FC = () => {
//   const [step, setStep] = useState(1);

//   const handleProceed = () => {
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         {step === 1 ? (
//           <BusinessInfoForm currentStep={step} onProceed={handleProceed} />
//         ) : (
//           <OwnerDetailsForm currentStep={step} onBack={handleBack} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// src/App.tsx
import React, { useState } from 'react';
import BusinessInfoForm from './pages/BusinessInfoForm';
import OwnerDetailsForm from './pages/OwnerDetailsForm';

const App: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleProceed = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
        {step === 1 ? (
          <BusinessInfoForm currentStep={step} onProceed={handleProceed} />
        ) : (
          <OwnerDetailsForm currentStep={step} onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default App;
