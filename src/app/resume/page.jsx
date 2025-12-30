"use client";

import React from "react";
import { Center, Box, Button } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import ImageONE from '../../../public/images/image2.png';

const Resume = () => {
  return (
    <Center>
      <Box
        width={["90vw", "90vw", "80vw"]}
        height="100%"
        marginTop="2rem"
        marginBottom="4rem"
      >
        <Button
          as="a"
          href="/files/Peraam_Manasa_Profile_4years_1980.pdf"
          colorScheme="teal"
          size="sm"
          download="Peraam_Manasa_Profile_4years_1980.pdf"
        >
          Download&nbsp;
          <AiOutlineDownload fill="black" />
        </Button>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1.414", // A4 aspect ratio
            marginTop: "1em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
          }}
        >
          <Image
            src={ImageONE}
            alt="Resume Preview"
            fill
            sizes="(max-width: 768px) 90vw, 80vw"
            quality={100}
            priority
            style={{
              objectFit: "contain"
            }}
          />
        </div>
      </Box>
    </Center>
  );
};

export default Resume;

