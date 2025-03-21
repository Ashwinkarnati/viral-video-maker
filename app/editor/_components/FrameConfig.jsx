"use client";
import React, { useContext, useEffect, useState } from "react";
import TextAreaBox from "./TextAreaBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layers, LetterText, Smile, SwatchBook } from "lucide-react";
import { VideoFrameContext } from "@/app/_context/VideoFramesContext";
import SliderField from "./SliderField";
import DropDown from "./DropDown";
import { AnimationList, FontList } from "@/app/_data/List";
import ColorPickerField from "./ColorPickerField";
import BackgroundField from "./BackgroundField";
import EmojiField from "./EmojiField";

const FrameConfig = () => {
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
  const [frame, setFrame] = useState({});

  // Initialize `frame` when `videoFrames` is available
  useEffect(() => {
    if (videoFrames?.frameList && videoFrames.selectedFrame !== undefined) {
      setFrame(videoFrames.frameList[videoFrames.selectedFrame]);
    }
  }, [videoFrames]);

  const handleInputChange = (field, value) => {
    const updatedFrame = { ...frame, [field]: value };
    setFrame(updatedFrame);

    if (videoFrames?.frameList?.length) {
      const updatedFrameList = [...videoFrames.frameList];
      updatedFrameList[videoFrames.selectedFrame] = updatedFrame;

      setVideoFrames((prev) => ({
        ...prev,
        frameList: updatedFrameList,
      }));
    }
  };

  return (
    <div className="p-3 bg-gray-100 rounded-lg">
      <Accordion type="single" collapsible>
        {/* Text Configuration */}
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex gap-2 text-lg items-center">
              <LetterText /> Text
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {/* Text Input */}
            <TextAreaBox
              frame={frame}
              handleInputChange={(value) => handleInputChange("text", value)}
            />
            {/* Duration Dropdown */}
            <DropDown
              defaultValue={frame?.duration || 2}
              label={"Duration in Seconds"}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              handleChange={(value) =>
                handleInputChange("duration", parseInt(value))
              }
            />
            {/* Font Size Slider */}
            <SliderField
              label={"Font Size"}
              defaultValue={frame?.fontSize || 16}
              handleInputChange={(value) =>
                handleInputChange("fontSize", value)
              }
            />
            {/* Font Family Dropdown */}
            <DropDown
              defaultValue={frame?.fontFamily || "bungee"} // Default to "bungee"
              label="Font Family"
              options={FontList}
              handleChange={(value) => handleInputChange("fontFamily", value)}
            />
            {/* Text Color Picker */}
            <ColorPickerField
              defaultColor={frame.textColor}
              handleInputChange={(value) => handleInputChange("textColor", value)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Background Configuration */}
        <AccordionItem value="background">
          <AccordionTrigger>
            <span className="flex gap-2 text-lg items-center">
              <SwatchBook /> Background
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {/* Background Field */}
            <BackgroundField
              defaultValue={frame.bgColor || "#ffffff"} // Default to white
              handleInputChange={(value) => handleInputChange("bgColor", value)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Animation Configuration */}
        <AccordionItem value="animation">
          <AccordionTrigger>
            <span className="flex gap-2 text-lg items-center">
              <Layers /> Animation
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <DropDown
              defaultValue={frame?.animation}
              label={"Text Animation"}
              options={AnimationList}
              handleChange={(value) => handleInputChange("animation", value)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Sticker Configuration */}
        <AccordionItem value="sticker">
          <AccordionTrigger>
            <span className="flex gap-2 text-lg items-center">
              <Smile /> Sticker
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {/* Emoji Field */}
            <EmojiField
              handleInputChange={(value) => handleInputChange("sticker", value)}
            />
            {/* Sticker Size Slider */}
            <SliderField
              defaultValue={frame?.stickerSize || 25}
              label={"Sticker Size"}
              handleInputChange={(value) => handleInputChange("stickerSize", value)}
            />
            <div className="flex gap-5 w-full">
              <SliderField label={'PositionX'}
              defaultValue={frame?.stickerPositionX??'50'}
              handleInputChange={(value)=>handleInputChange('stickerPositionX',value)}
              max={500}/>

              <SliderField label={'PositionY'}
              defaultValue={frame?.stickerPositionY??'50'}
              max={500}
              handleInputChange={(value)=>handleInputChange('stickerPositionY',value)}/>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FrameConfig;