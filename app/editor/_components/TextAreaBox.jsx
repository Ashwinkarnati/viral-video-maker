import React from 'react';
import { Textarea } from "@/components/ui/textarea";

const TextAreaBox = ({ frame, handleInputChange }) => {
  return (
    <div className='flex gap-2 flex-col'>
      <label>Content</label>
      <Textarea
        className="bg-white"
        value={frame?.text || ''}
        onChange={(e) => handleInputChange('text', e.target.value)}
      />
    </div>
  );
};

export default TextAreaBox;