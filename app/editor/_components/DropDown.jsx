import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDown = ({ label, defaultValue, options, handleChange }) => {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label>{label}</label>
      <Select
        defaultValue={defaultValue}
        onValueChange={(value) => handleChange(value)} // Update state when the value changes
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((item, index) => (
            <SelectItem
              key={index}
              value={typeof item === "object" ? item.name : item}
            >
              {typeof item === "object" ? item.name : item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDown;