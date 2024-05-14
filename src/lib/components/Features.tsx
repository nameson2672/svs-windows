'use client';

import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack pt={20}>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="brand.900"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text color="brand.100" fontWeight={600}>
        {title}
      </Text>
      <Text color="white">{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box
      p={4}
      mt="10"
      w="100%"
      h={{ base: '1000px', md: '700px', lg: '400px' }}
      bgImage="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
      bgSize="cover"
      bgAttachment="fixed"
      bgPos="50% 100%"
      pos="relative"
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust opacity as needed
      >
        <Center>
          <Box maxWidth={{ base: '300px', md: '600px', lg: '900px' }}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title="Quick Reponse To Query"
                text="Our dedicated team ensures prompt responses to all your inquiries, providing efficient support and clear communication every step of the way."
              />
              <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title="Affortable Price"
                text="Offering competitive prices without compromising on quality, making our products accessible to a wide range of budgets without sacrificing excellence."
              />
              <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title="Instant Delivery"
                text="Streamlined processes enable swift delivery of your orders, ensuring you receive your custom windows and doors promptly, saving you time and minimizing waiting periods."
              />
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
