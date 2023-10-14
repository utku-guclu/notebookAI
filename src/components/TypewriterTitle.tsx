'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Unlock your productivity with AI-powered note management. 🚀')
          .pauseFor(1000).deleteAll()
          .typeString('Say hello to a new era of notekeeping, thanks to AI. 👋')
          .pauseFor(1000).deleteAll()
          .start(); // Add this start() method to initiate the typing
      }}
    />
  );
};

export default TypewriterTitle;
