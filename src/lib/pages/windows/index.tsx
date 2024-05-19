import {
  Stack,
  Flex,
  Text,
  VStack,
  Center,
  Box,
  Image,
} from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import type { WindowsPropsType } from '~/../type/PropsType';
import Benifits from '~/lib/components/Benifits';
import { CertificateCard } from '~/lib/components/CertificateCard';
import FreeEstimationBanner from '~/lib/components/FreeEstimationBanner';
import { getWindowBySlug } from '~/lib/services/content/windows';

const WindowsPost = ({ params }: WindowsPropsType) => {
  const windowData = getWindowBySlug(params.id);

  if (!windowData) {
    notFound();
  }

  return (
    <>
      <Box>
        <Flex
          w="full"
          h="40vh"
          backgroundColor="rgba(0,0,0,0.5)"
          backgroundImage="url(/cover.webp)"
          backgroundSize="cover"
          backgroundPosition="center center"
        >
          <VStack
            w="full"
            justify="center"
            bgGradient="linear(to-r, blackAlpha.800, transparent)"
          >
            <Stack maxW="2xl" align="center" spacing={6} dropShadow="">
              <CertificateCard />
              <Center flexDirection="column">
                <Text
                  fontSize={{ base: '40', md: '60' }}
                  letterSpacing={6}
                  color="white"
                  fontWeight={500}
                  lineHeight={1.2}
                  textShadow="1px 1px 2px black"
                  textAlign="center"
                >
                  {windowData.name}
                </Text>
                <Text
                  w="400px"
                  fontSize="16"
                  color="white"
                  fontWeight={400}
                  textShadow="1px 1px 1px black"
                >
                  {windowData.subHeading}
                </Text>
              </Center>
            </Stack>
          </VStack>
        </Flex>
        <Box marginX="auto" maxW="1000px" marginTop="20">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
          >
            <Image src={windowData.windowImage} alt={windowData.subHeading} />
            <Box
              m={{ base: 5, md: 0 }}
              p="10"
              borderColor="brand.300"
              maxW="md"
              borderWidth="4px"
              overflow="hidden"
            >
              <Text
                mb="5"
                textAlign="center"
                fontSize="30"
                color="semibrand.400"
              >
                Overview
              </Text>
              <Text>{windowData.description}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Benifits {...windowData} />
      <FreeEstimationBanner />
    </>
  );
};

export default WindowsPost;
