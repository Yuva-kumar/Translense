import React from 'react';
import { useDispatch } from 'react-redux';
import { setImageUrl } from '../features/formSlice';

const FileUpload: React.FC = () => {
  const dispatch = useDispatch();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImageUrl(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4 w-full max-w-sm mx-auto">
      <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
        Upload Image of your Restaurant
      </label>
      <input
        type="file"
        onChange={handleImageUpload}
        className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
      />
    </div>
  );
};

export default FileUpload;
