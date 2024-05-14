import {
  Box,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import TestimonialCard from './card/TestimonialCard';

const testimonials = [
  {
    name: 'Emily S.',
    role: 'Interior Designer',
    content:
      'Working with Shree and his team was an absolute pleasure! They were attentive to every detail of my custom window and door needs. The quality of their workmanship exceeded my expectations. I highly recommend their services to anyone looking for top-notch craftsmanship.',
    avatar:
      'https://chumley.barstoolsports.com/wp-content/uploads/2019/01/08/Screen-Shot-2019-01-08-at-11.18.22-AM.png',
  },
  {
    name: 'Johnathan L.',
    role: 'Architect',
    content:
      "I've collaborated with Shree and his team on multiple projects, and each time they deliver exceptional results. Their attention to detail and commitment to customer satisfaction make them stand out in the industry. I wouldn’t hesitate to recommend them to anyone in need of custom windows and doors.",
    avatar: '/Johnathan.jpg',
  },
  {
    name: 'Sophia M.',
    role: 'Homeowner',
    content:
      'From start to finish, the process of getting custom windows and doors from Shree’s company was seamless. Shree’s team guided me through every step, and their friendly approach made the experience enjoyable. The final result transformed the look and feel of my home. I couldn’t be happier!',
    avatar: './emily.webp',
  },
  {
    name: 'David W.',
    role: 'Real Estate Developer',
    content:
      'Shree’s company is my go-to for all my custom window and door needs. Their expertise and attention to detail ensure that my projects always have the perfect finishing touch. Working with Shree is not only easy but also a guarantee of quality.',
    avatar: '/david.png',
  },
  {
    name: 'Lily C.',
    role: 'Home Renovation Expert',
    content:
      "As a home renovation expert, I have worked with numerous window and door companies, but none compare to the level of professionalism and expertise that Shree's company brings to the table. Their attention to detail and dedication to customer satisfaction make them a standout choice for anyone looking for custom solutions.",
    avatar: './Lily.jpg',
  },
  {
    name: 'Oliver R.',
    role: 'Property Manager',
    content:
      "Shree's company has been our trusted partner for years when it comes to installing custom windows and doors in our properties. Their professionalism and attention to detail make them a pleasure to work with. We have complete confidence in their ability to deliver top-quality results every time.",
    avatar: './Oliver.jpg',
  },
];

export default function Testimonials() {
  return (
    <Flex
      textAlign="center"
      pt={{ base: 5, md: 10, lg: 20 }}
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="full"
      overflow="hidden"
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
        <chakra.h3
          fontWeight="bold"
          fontSize={{ base: 15, md: 15, lg: 20 }}
          textTransform="uppercase"
          color="brand.400"
        >
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={{ base: 25, md: 30, lg: 48 }}
          fontWeight="bold"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          You're in good company
        </chakra.h1>
        <chakra.h2
          margin="auto"
          width="70%"
          fontFamily="Inter"
          fontWeight="medium"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            1500+
          </chakra.strong>{' '}
          home use our windows and door to build their home!
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing="20"
        mt={16}
        mb={16}
        mx={{ base: '5', md: '20' }}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
