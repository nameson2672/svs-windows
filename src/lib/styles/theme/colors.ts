import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#8b9ac1',
    200: '#5d72a8',
    300: '#2e498f',
    400: '#123283',
    500: '#455d9c',
    600: '#153076',
    700: '#122a69',
    800: '#0e204f',
    900: '#091534',
  },
  semibrand: {
    100: '#fda49e',
    200: '#fd776d',
    300: '#fc493d',
    400: '#fb1c0c',
    500: '#e2190b',
    600: '#7e0e06',
    700: '#b01408',
    800: '#b01408',
    900: '#7e0e06',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
