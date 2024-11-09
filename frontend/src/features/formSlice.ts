// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface FormState {
//   businessName: string;
//   country: string;
//   state: string;
//   city: string;
//   address: string;
//   openingTime: string;
//   closingTime: string;
//   email: string;
//   mobileNumber: string;
//   imageUrl: string | null;
// }

// const initialState: FormState = {
//   businessName: '',
//   country: 'India',
//   state: '',
//   city: '',
//   address: '',
//   openingTime: '07:00',
//   closingTime: '19:00',
//   email: '',
//   mobileNumber: '',
//   imageUrl: null,
// };

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
//       return { ...state, ...action.payload };
//     },
//     setImageUrl: (state, action: PayloadAction<string>) => {
//       state.imageUrl = action.payload;
//     },
//   },
// });

// export const { updateForm, setImageUrl } = formSlice.actions;
// export default formSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state interface
interface FormState {
  businessName: string;
  country: string;
  state: string;
  city: string;
  address: string;
  openingTime: string;
  closingTime: string;
  email: string;
  mobileNumber: string;
  imageUrl: string | null;
}

// Initialize the state with default values
const initialState: FormState = {
  businessName: '',
  country: 'India',
  state: '',
  city: '',
  address: '',
  openingTime: '07:00',
  closingTime: '19:00',
  email: '',
  mobileNumber: '',
  imageUrl: null,
};

// Create a slice with two reducers: one to update multiple fields and one specifically for the image URL
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Action to update multiple form fields at once
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    // Action to update only the image URL
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

// Export actions and reducer to be used in components and the store
export const { updateForm, setImageUrl } = formSlice.actions;
export default formSlice.reducer;
