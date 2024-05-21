import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react';

import type { WindowType } from '../../../type/dataTypes';

import FrameCard from './card/FrameCard';

function Windows() {
  return (
    <Center>
      <Box py="20">
        <VStack spacing={2} textAlign="center">
          <Heading
            as="h2"
            color="gray.600"
            fontSize={{ base: 'md', md: '3xl' }}
          >
            OUR WINDOW STYLES
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">
            Our lineup of energy-efficient vinyl windows features a wide range
            of styles, finishes and options to add value and curb appeal to any
            home.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12} pt={12}>
          {windowTypes.map((e) => (
            <FrameCard {...e} />
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
}

const windowTypes: Array<WindowType> = [
  {
    name: 'Awning Window',
    description: 'Windows hinged at the top and opening outward.',
    link: 'awning',
    imageUrl: '/show/awning.jpeg',
  },
  {
    name: 'Casement',
    description: 'Hinged windows that swing outward.',
    link: 'casement',
    imageUrl: '/show/casement.jpeg',
  },
  {
    name: 'Double Slider',
    description: 'Windows with two horizontal sliding sashes.',
    imageUrl: '/slider_image-800x677.png',
    link: 'double-slider',
  },
  {
    name: 'Double Hung',
    description: 'Traditional windows with two vertical sliding sashes.',
    imageUrl: '/show/double-hung.jpg',
    link: 'double-hung',
  },
  {
    name: 'Single Slider',
    description: 'Similar to double sliders but with one movable sash.',
    imageUrl: '/show/single-slider.jpg',
    link: 'single-slider',
  },
  {
    name: 'Single Hung',
    description: 'Windows with only the bottom sash movable.',
    imageUrl: '/show/single-hung.png',
    link: 'single-hung',
  },
  {
    name: 'End Vent Slider',
    description: 'Windows with a fixed center pane and sliding side panels.',
    imageUrl: '/show/end-vent.jpeg',
    link: 'end-vent-slider',
  },
  {
    name: 'Picture Window',
    description: 'Large fixed windows for scenic views.',
    imageUrl: '/show/picture.jpg',
    link: 'picture',
  },
];

export default Windows;
