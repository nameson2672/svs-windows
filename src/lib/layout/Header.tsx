'use client';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      padding={{ base: 0, md: '0px 0px' }}
      p={0}
      w="100%"
      position="fixed"
      top="0"
      zIndex="1000"
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4, md: 50, lg: 250 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={6} h={6} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box as={Link} href="/">
            <Image h={16} src="/svs_logo.png" alt="SVS Windows Logo" />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            as={Link}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="brand.400"
            href="/estimation"
            _hover={{
              bg: 'brand.300',
            }}
          >
            Get A Free Estimation
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack
      direction="row"
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                href={navItem.href ?? '#'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as={Link}
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('brand.50', 'gray.900') }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: 'brand.200' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="blue.400" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Windows',
    children: [
      {
        label: 'Awning Window',
        subLabel: 'Windows hinged at the top and opening outward.',
        href: '/windows/awning',
      },
      {
        label: 'Casement',
        subLabel: 'Hinged windows that swing outward.',
        href: '/windows/casement',
      },
      {
        label: 'Double Hung',
        subLabel: 'Traditional windows with two vertical sliding sashes.',
        href: '/windows/double-hung',
      },
      {
        label: 'Double Slider',
        subLabel: 'Windows with two horizontal sliding sashes.',
        href: '/windows/double-slider',
      },
      {
        label: 'End Vent Slider',
        subLabel: 'Windows with a fixed center pane and sliding side panels.',
        href: '/windows/end-vent-slider',
      },
      {
        label: 'Picture Window',
        subLabel: 'Large fixed windows for scenic views.',
        href: '/windows/picture',
      },
      {
        label: 'Single Hung',
        subLabel: 'Windows with only the bottom sash movable.',
        href: '/windows/single-hung',
      },
      {
        label: 'Single Slider',
        subLabel: 'Similar to double sliders but with one movable sash.',
        href: '/windows/single-slider',
      },
    ],
  },
  {
    label: 'Faq',
    href: '/faq',
  },
  {
    label: 'About Us',
    href: '/about',
  },
];
