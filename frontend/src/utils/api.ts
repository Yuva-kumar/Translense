
export const sendOtp = async (type: 'email' | 'phone', value: string) => {
    console.log(`Sending OTP to ${type}: ${value}`);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };
  
  // Simulate verifying OTP
  export const verifyOtp = async (type: 'email' | 'phone', otp: string) => {
    console.log(`Verifying OTP for ${type}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '1234') {
          resolve(true);
        } else {
          reject('Invalid OTP');
        }
      }, 1000);
    });
  };
  