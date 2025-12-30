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
                  Full Stack AI Developer
                </Heading>
                <br />
                <Text fontWeight="bold" mb={4}>
                  4+ years of experience delivering scalable full-stack solutions across frontend, backend, cloud, and AI systems.
                </Text>
                <Text mb={4}>
                  Full Stack AI Developer with 4+ years of experience designing, building, and scaling high‑performance web applications. Strong expertise across modern frontend frameworks and robust backend systems, with a proven ability to integrate Generative AI into real‑world products. Adept at translating complex business requirements into clean, efficient, and secure solutions.
                </Text>
                <Text mb={4}>
                  Experienced in delivering production‑ready applications using React and Next.js on the frontend, and Node.js, NestJS, and FastAPI on the backend. Hands‑on with cloud‑native architectures across Azure, GCP, and AWS, leveraging Docker, Kubernetes, and CI/CD pipelines for reliable deployments.
                </Text>
                <Text mb={4}>
                  Known for optimizing performance, improving developer experience, and building AI‑powered automation, chatbots, and analytics platforms using LLMs, RAG, and agent‑based workflows. A collaborative engineer with strong ownership, clear communication, and a continuous‑learning mindset.
                </Text>
                <Text>
                  Open to collaborating on innovative, AI‑driven and full‑stack projects that push the boundaries of modern web development.
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
