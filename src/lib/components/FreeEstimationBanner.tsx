'use client';

import { Box, Flex, Link, Stack, chakra } from '@chakra-ui/react';

const FreeEstimationBanner = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: '#3e3e3e',
      }}
      p={{ base: 4, md: 50 }}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        justify="center"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        w="full"
      >
        <Box
          w={{
            base: 'full',
            md: '75%',
            lg: '50%',
          }}
          px={4}
          py={20}
          textAlign={{
            base: 'left',
            md: 'center',
          }}
        >
          <chakra.span
            fontSize={{
              base: '3xl',
              sm: '4xl',
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: 'gray.100',
            }}
            mb={6}
          >
            <chakra.span display="block">
              Want to Get Free Estimation?
            </chakra.span>
            <chakra.span
              display="block"
              color="brand.600"
              _dark={{
                color: 'gray.500',
              }}
            >
              Send us the info
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{
              base: 'left',
              md: 'center',
            }}
            direction={{
              base: 'column',
              sm: 'row',
            }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                _light={{
                  color: 'white',
                }}
                bg="brand.600"
                _dark={{
                  bg: 'brand.500',
                }}
                _hover={{
                  bg: 'brand.300',
                  _dark: {
                    bg: 'brand.600',
                  },
                }}
              >
                Free Estimation
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default FreeEstimationBanner;
