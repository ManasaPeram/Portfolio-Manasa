"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              ABOUT
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="4rem"
              templateColumns={[null, null, "30% 70%"]}
            >
              <Image
                objectFit="shrink"
                src="/images/profile.jpg"
                alt="profile-image"
                width={["20rem", "30rem", "20rem"]}
                height={["20rem", "30rem", "20rem"]}
                marginBottom={["1rem", "1rem", null]}
              />

              <Box textAlign="justify">
                <Heading size="xl" mt={1} >
                  👋 Hey there!
                </Heading>
                <br />
                <Text>
  Hey, I&apos;m Manasa, a full stack developer with a passion for building the future of the web. From designing sleek, intuitive front-end interfaces to developing powerful back-end systems, I create seamless, scalable applications that deliver exceptional user experiences. 
  <br></br>
  <br></br>
  Whether it&apos;s crafting dynamic React applications or optimizing server-side architecture with Node.js and databases, I thrive on turning complex challenges into elegant solutions. Every project is a chance to innovate, and I&apos;m always ready to push the boundaries of what&apos;s possible with code.
</Text>
<br />
<Text>
  📫 Let&apos;s team up and build something amazing! I’m always excited to collaborate on new, creative projects with fellow developers and tech enthusiasts.
</Text>

                <Text>
                  Happy coding! 🖥️
                  <br />
                </Text>
              </Box>
            </SimpleGrid>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
