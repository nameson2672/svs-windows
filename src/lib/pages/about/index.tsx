/* eslint-disable react/no-unescaped-entities */

'use client';

import { Box, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box mt="20" mx="auto" maxWidth={{ base: '600px', md: '1200px' }}>
      <Text
        color="blue.400"
        fontWeight={700}
        lineHeight={1.2}
        p={2}
        fontSize={{ base: 'xl', md: 'xx-large' }}
        alignSelf="flex-start"
        rounded="md"
        textAlign="left"
      >
        About SVS Windows and Door
      </Text>
      <Box p={4}>
        <Text mb={6}>
          Welcome to SVS Windows and Door, your premier destination for
          exceptional custom windows and doors. With over 15 years of dedicated
          service, we bring a wealth of expertise and a passion for
          craftsmanship to every project we undertake.
        </Text>
        <Text mb={6}>
          At SVS Windows and Door, we pride ourselves on our commitment to
          excellence, from the initial consultation to the final installation.
          Our team of skilled artisans works tirelessly to bring your vision to
          life, crafting bespoke windows and doors that not only enhance the
          beauty of your space but also exceed your expectations in terms of
          functionality and durability.
        </Text>
        <Text mb={6}>
          What sets us apart is our unwavering dedication to customer
          satisfaction. We understand that every project is unique, and we
          strive to provide personalized solutions tailored to your specific
          needs and preferences. Whether you're renovating your home, designing
          a commercial space, or embarking on a new construction project, you
          can trust SVS Windows and Door to deliver superior results that stand
          the test of time.
        </Text>
        <Text mb={6}>
          Driven by a passion for innovation and a commitment to quality, we
          continuously push the boundaries of design and technology to offer
          cutting-edge solutions that elevate the aesthetics and performance of
          your property. From energy-efficient windows to secure and stylish
          doors, we combine the latest advancements with time-honored
          craftsmanship to create products that enhance your living or working
          environment in every way.
        </Text>
        <Text mb={6}>
          At SVS Windows and Door, we believe that the journey is just as
          important as the destination. That's why we prioritize open
          communication, transparency, and collaboration throughout the entire
          process, ensuring that you're informed and involved every step of the
          way. Our goal is not only to meet your expectations but to exceed
          them, leaving you with a finished product that brings joy and
          satisfaction for years to come.
        </Text>
        <Text mb={6}>
          Thank you for considering SVS Windows and Door for your custom window
          and door needs. We look forward to the opportunity to serve you and to
          create something truly exceptional together.
        </Text>
      </Box>
    </Box>
  );
}
