import React from "react";
import ColorPicker from "react-best-gradient-color-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ColorPickerField = ({defaultColor,handleInputChange}) => {
  return (
    <div className="flex gap-4 items-center mt-3">
      <label>Text Color</label>
      
      <Popover>
        <PopoverTrigger asChild>
        <div
        style={{
          backgroundColor: defaultColor,
          cursor: 'pointer'
        }}
        className="w-10 h-10 rounded-lg"
      ></div>
        </PopoverTrigger>
        <PopoverContent>
            <ColorPicker value={defaultColor} onChange={(v)=>handleInputChange(v)} 
            hideColorGuide
            hideControls
            hideEyeDrop
            height={250}
            width={270}
            />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorPickerField;
