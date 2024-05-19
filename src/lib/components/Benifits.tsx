'use client';

import { CheckIcon } from '@chakra-ui/icons';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';

import type { WindowDetails } from '../services/content/type';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex
        w={8}
        h={8}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Benifits({
  name,
  showcaseImage,
  benefits,
  subHeading,
  operation,
}: WindowDetails) {
  return (
    <Container maxW="8xl" pt={40} pb={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="brand.900"
            fontWeight={600}
            fontSize="sm"
            bg={useColorModeValue('semibrand.100', 'blue.900')}
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Our {name}
          </Text>
          <Heading>Benifits of {name}</Heading>
          <Text color="gray.500" fontSize="lg">
            {subHeading}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            {benefits.map((item) => (
              <Feature
                icon={<Icon as={CheckIcon} color="brand.600" w={5} h={5} />}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                iconBg={useColorModeValue('semibrand.100', 'yellow.900')}
                text={item}
              />
            ))}
          </Stack>
          <Text color="gray.500" marginTop={4}>
            How to Operate
          </Text>
          <Text color="gray.400">{operation}</Text>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src={showcaseImage}
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
