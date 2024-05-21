import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Center,
  Image,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      // eslint-disable-next-line sonarjs/no-duplicate-string
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW="6xl" pt={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box as="a" href="/">
              <Image h={16} src="/svs_logo.png" alt="SVS Windows Logo" />
            </Box>
            <Text fontSize="sm">
              © 2024 SVS Windows & Door. All rights reserved
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Windows</ListHeader>
            <Link href="/windows/awning">Awning</Link>
            <Link href="/windows/casement">Casement</Link>
            <Link href="/windows/double-hung">Double Hung</Link>
            <Link href="/windows/double-slider">Double Slider</Link>
            <Link href="/windows/end-vent-slider">End Vent Slider</Link>
            <Link href="/windows/picture">Picture</Link>
            <Link href="/windows/single-hung">Single Hung</Link>
            <Link href="/windows/single-slider">Single Slider</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href="/about">About us</Link>
            <Link href="/faq">Faq</Link>
          </Stack>
        </SimpleGrid>
        <SmallWithSocial />
      </Container>
    </Box>
  );
}

function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW="6xl" py={4} spacing={4}>
        <Center>
          <Link href="https://www.nameson.com.np" isExternal>
            © 2024 Build By Nameson Gaudel.
          </Link>
        </Center>
      </Container>
    </Box>
  );
}
