'use client';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import SimpleThreeColumns from '~/lib/components/Features';
import Testimonials from '~/lib/components/Testimonials';
import Windows from '~/lib/components/Windows';

export default function Home() {
  return (
    <>
      <Flex
        w="full"
        h="100vh"
        backgroundImage="url(https://res.cloudinary.com/ddxsatvd0/image/upload/fl_preserve_transparency/v1715432765/interior-space-decorated-boho-style_zdzr6o.jpg?_s=public-apps)"
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient="linear(to-r, blackAlpha.600, transparent)"
        >
          <Stack maxW="2xl" align="flex-start" spacing={6}>
            <Text
              color="white"
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              textShadow="3px 3px 2px rgba(20,9,5,0.19)"
            >
              Upgrade Your Home with Premium Quality Windows and Doors -
              Experience Unmatched Durability and Elegance!
            </Text>
            <Stack direction="row">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="semibrand"
                variant="solid"
              >
                Get a Free Estimation
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Windows />
      <Testimonials />
      <SimpleThreeColumns />
    </>
  );
}
