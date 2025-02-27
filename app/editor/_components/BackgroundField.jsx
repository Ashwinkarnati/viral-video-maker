import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GradientColors, SolidColors } from "@/app/_data/Colors";

const BackgroundField = ({ defaultValue, handleInputChange }) => {
  return (
    <div>
      <Tabs defaultValue="solid" className="w-[450px]">
        <TabsList>
          <TabsTrigger value="solid">Solid</TabsTrigger>
          <TabsTrigger value="gradient">Gradient</TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <ScrollArea className="h-[250px] bg-white w-[300px] rounded-md border p-4">
            <div className="grid grid-cols-4 gap-2">
              {SolidColors.map((color, index) => (
                <div
                  className="w-full h-10 rounded-lg cursor-pointer"
                  key={index}
                  onClick={() => handleInputChange(color.hexCode)}
                  style={{
                    backgroundColor: color.hexCode,
                    border: defaultValue === color.hexCode ? "2px solid black" : "none",
                  }}
                ></div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="gradient">
          <ScrollArea className="h-[250px] bg-white w-[300px] rounded-md border p-4">
            <div className="grid grid-cols-4 gap-2">
              {GradientColors.map((color, index) => (
                <div
                  className="w-full h-10 rounded-lg cursor-pointer"
                  key={index}
                  onClick={() => handleInputChange(color.gradient)}
                  style={{
                    background: color.gradient,
                    border: defaultValue === color.gradient ? "2px solid black" : "none",
                  }}
                ></div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BackgroundField;