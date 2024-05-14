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
          <Heading as="h1" fontSize={{ base: 'md', md: '4xl' }}>
            OUR WINDOW STYLES
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500">
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
    name: 'Casement',
    description: 'Hinged windows that swing outward.',
    imageUrl:
      'https://www.atrium.com/wp-content/uploads/2018/08/wsp-casement-700-img-600x600.jpg',
  },
  {
    name: 'Double Slider',
    description: 'Windows with two horizontal sliding sashes.',
    imageUrl: './slider_image-800x677.png',
  },
  {
    name: 'Double Hung',
    description: 'Traditional windows with two vertical sliding sashes.',
    imageUrl:
      'https://windowdepotupstate.com/wp-content/uploads/2019/04/DHHeroimg1.jpg',
  },
  {
    name: 'Single Slider',
    description: 'Similar to double sliders but with one movable sash.',
    imageUrl:
      'https://magicwindow.ca/wp-content/uploads/2021/09/hungwindow-610x666.png',
  },
  {
    name: 'Single Hung',
    description: 'Windows with only the bottom sash movable.',
    imageUrl:
      'https://www.windowdoor.com/wp-content/uploads/2022/09/WindowCleaning-703x1024.jpg',
  },
  {
    name: 'End Vent Slider',
    description: 'Windows with a fixed center pane and sliding side panels.',
    imageUrl:
      'https://weathergard.com/replacement-windows/sliding/img/huntington-woods-end-vent.jpg',
  },
  {
    name: 'Picture Window',
    description: 'Large fixed windows for scenic views.',
    imageUrl:
      'https://www.contemporist.com/wp-content/uploads/2022/03/modern-living-room-large-picture-window-160322-1228-04.jpg',
  },
];

export default Windows;
