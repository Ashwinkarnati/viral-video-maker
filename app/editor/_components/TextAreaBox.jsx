"use client";
import React from 'react';

const TextAreaBox = ({ frame, handleInputChange }) => {
  const handleChange = (e) => {
    const newValue = e.target.value; // Get the updated text from the textarea
    handleInputChange(newValue); // Pass the new value to the parent component
  };

  return (
    <textarea
      value={frame?.text || ''} // Use the text from the frame, or an empty string if undefined
      onChange={handleChange} // Trigger handleChange when the text changes
      placeholder="Enter your text here"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default TextAreaBox;