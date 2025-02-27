import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAvailableEmojis } from "@remotion/animated-emoji";

const EmojiField = ({ handleInputChange }) => {
  const emojiList = getAvailableEmojis();

  return (
    <div>
      <ScrollArea className="h-[200px] w-[320px] rounded-md border p-4">
        <div className="grid grid-cols-5">
          {emojiList.map((emoji, index) => (
            <img
              key={index}
              src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji.codepoint}/512.gif`}
              alt={emoji.name}
              width={42}
              height={42}
              className="cursor-pointer hover:bg-gray-300 rounded-lg p-1"
              onClick={() =>
                handleInputChange(
                  `https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji.codepoint}/512.gif`
                )
              }
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmojiField;