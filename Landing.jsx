import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Container,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <Box minH="100vh" py={{ base: "12", md: "24" }}>
      <Container maxW="container.xl">
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Stack spacing={{ base: "6", md: "8" }} maxW="lg">
            <Heading size="2xl" color="teal.600">
              Welcome to Our Service
            </Heading>
            <Text
              color="gray.600"
              fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
            >
              Discover amazing features and functionalities to make your life
              easier.
            </Text>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              <Button colorScheme="teal" size="lg">
                Get Started
              </Button>
            </NavLink>
          </Stack>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={16}>
          <Box p={6} borderRadius="md" boxShadow="md">
            <Heading size="lg" color="teal.500">
              Feature One
            </Heading>
            <Text mt={2} color="gray.600">
              Brief description of feature one. Explain how it helps users and
              why it's important.
            </Text>
          </Box>
          <Box p={6} borderRadius="md" boxShadow="md">
            <Heading size="lg" color="teal.500">
              Feature Two
            </Heading>
            <Text mt={2} color="gray.600">
              Brief description of feature two. Highlight its benefits and
              unique offerings.
            </Text>
          </Box>
          <Box p={6} borderRadius="md" boxShadow="md">
            <Heading size="lg" color="teal.500">
              Feature Three
            </Heading>
            <Text mt={2} color="gray.600">
              Brief description of feature three. Focus on what makes it stand
              out.
            </Text>
          </Box>
          <Box p={6} borderRadius="md" boxShadow="md">
            <Heading size="lg" color="teal.500">
              Feature Four
            </Heading>
            <Text mt={2} color="gray.600">
              Brief description of feature four. Emphasize the value it provides
              to users.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Landing;
