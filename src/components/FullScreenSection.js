import * as React from "react";
import './FullScreenSection.css';
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <main className="fullscreen-section">
      <div className='box-div-animation'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <VStack
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
      >
        <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
          {children}
        </VStack>
      </VStack>
    </main>
  );
};

export default FullScreenSection;