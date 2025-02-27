"use client";
import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import * as bungee from '@remotion/google-fonts/Bungee';
import * as anton from '@remotion/google-fonts/Anton';
import * as parisienne from '@remotion/google-fonts/Parisienne';
import * as pacifico from '@remotion/google-fonts/Pacifico';

const RemotionComposition = ({ frameList }) => {
  let trackFrame = 0;
  const { width, height } = useVideoConfig();

  // Load all fonts
  bungee.loadFont();
  anton.loadFont();
  parisienne.loadFont();
  pacifico.loadFont();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {
        frameList.map((frame, index) => {
          const fromFrame = index === 0 ? 0 : trackFrame;
          trackFrame = trackFrame + frame.duration * 30;
          const duration = frame.duration * 30;
          return (
            <Sequence key={index} from={fromFrame} durationInFrames={duration}>
              <h2 style={{
                color: frame?.textColor,
                fontSize: frame?.fontSize,
                fontFamily: frame?.fontFamily || "bungee", // Use the selected font family
                transform: `translateX(${width / 2 - 30}px) translateY(${height / 2 - 30}px)`
              }}>
                <AbsoluteFill>
                  {frame.text}
                </AbsoluteFill>
              </h2>
            </Sequence>
          );
        })
      }
    </AbsoluteFill>
  );
};

export default RemotionComposition;