'use clinet';

import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

import type { WindowType } from '../../../../type/dataTypes';

export default function FrameCard({ name, description, imageUrl }: WindowType) {
  return (
    <Center>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        mt={{ base: 50 }}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${imageUrl})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={imageUrl}
          />
        </Box>
        <Stack pt={10} align="center">
          <Text color="brand.500" fontSize="sm" textTransform="uppercase">
            {name}
          </Text>
          <Stack direction="row" align="center">
            <Text>{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
