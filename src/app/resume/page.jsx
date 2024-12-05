"use client";
import React from "react";
import { Center, Box, Button } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image"; // Use Next.js Image for optimized handling
import ImageONE from '../../../public/images/image.png'; // Correct path to your image

const Resume = () => {
  return (
    <>
      <Center>
        <Box
          width={["90vw", "90vw", "80vw"]}
          height="100%"
          marginTop="2rem"
          marginBottom="4rem"
        >
          <Button
            as="a"
            href="/files/Manasa_resume_v4.pdf"
            colorScheme="teal"
            size="sm"
            download="Manasa_resume_v4.pdf"
          >
            Download&nbsp;
            <AiOutlineDownload fill="black" />
          </Button>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
              marginTop: "1em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
            }}
          >
            {/* Using Next.js Image component for better optimization */}
            <Image
              src={ImageONE}
              alt="Resume Preview"
              layout="responsive" // Ensures responsive behavior
              objectFit="cover" // Adjusts how the image fits in the container
            />
          </div>
        </Box>
      </Center>
    </>
  );
};

export default Resume;
