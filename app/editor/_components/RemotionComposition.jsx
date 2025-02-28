"use client";
import React, { useContext } from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import * as bungee from "@remotion/google-fonts/Bungee";
import * as anton from "@remotion/google-fonts/Anton";
import * as parisienne from "@remotion/google-fonts/Parisienne";
import * as pacifico from "@remotion/google-fonts/Pacifico";
import * as outfit from "@remotion/google-fonts/Outfit";
import * as rowdies from "@remotion/google-fonts/Rowdies";
import * as permanent from "@remotion/google-fonts/PermanentMarker";
import { TextAnimation } from "@/app/_data/Animations";
import { useCurrentFrame } from "remotion";
import { VideoFrameContext } from "@/app/_context/VideoFramesContext";

const RemotionComposition = ({ frameList }) => {
  let trackFrame = 0;
  const { videoFrames } = useContext(VideoFrameContext);
  const { width, height, fps } = useVideoConfig();
  const currentFrame = useCurrentFrame();

  // Load all fonts
  bungee.loadFont();
  anton.loadFont();
  parisienne.loadFont();
  pacifico.loadFont();
  outfit.loadFont();
  rowdies.loadFont();
  permanent.loadFont();

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {frameList.map((frame, index) => {
        const fromFrame = index === 0 ? 0 : trackFrame;
        trackFrame = trackFrame + frame.duration * 30;
        const duration = frame.duration * 30;
        return (
          <Sequence key={index} from={fromFrame} durationInFrames={duration}>
            <AbsoluteFill style={{ background: frame.bgColor || "#ffffff" }}>
              {/* Sticker */}
              {frame?.sticker && (
                <img
                  src={frame.sticker}
                  alt="emoji"
                  width={frame?.stickerSize || 25} // Use stickerSize or default to 50
                  height={frame?.stickerSize || 25} // Use stickerSize or default to 50
                  style={{
                        transform: `translateX(${frame?.stickerPositionX}px) translateY(${frame?.stickerPositionY}px)`
                  }}
                />
              )}
              {/* Text */}
              <h2
                style={{
                  color: frame?.textColor,
                  textAlign: "center",
                  fontSize: frame?.fontSize,
                  fontFamily: frame?.fontFamily || "bungee",
                  transform: `${TextAnimation(frame.animation, currentFrame, fps, fromFrame, width, height)}`,
                }}
              >
                {frame.text}
              </h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}

      {/* Render Audio only if videoFrames.music is defined */}
      {videoFrames?.music && (
        <Audio volume={0.5} src={staticFile(videoFrames.music)} />
      )}
    </AbsoluteFill>
  );
};

export default RemotionComposition;