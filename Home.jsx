import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Heading, HStack } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../assets/homepage.json";
// import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
{/*     <Navbar/> */}
    <Box p={4}>
      <HStack spacing={5} justifyContent="center">
      <Heading>Welcome to my local LLM model</Heading>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "500px",
            height: "500px",
            // marginRight: "160px",
            // marginTop: "60px",
          }}
        />
      </HStack>
    </Box>
    </>
  );
}

export default Home;


// after seccesfully installing react install other dependances ChakraUi and lottie-react : npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion , npm install lottie-react
// 
// download homepage.json (thats an lottie animation)drag and drop lottie animation in to assets folder
// after seccesfully installing all of this modules and dependances you should me good to go  
