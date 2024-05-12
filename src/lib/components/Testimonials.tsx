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
      pt={20}
      justifyContent="center"
      direction="column"
      width="full"
      overflow="hidden"
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
        <chakra.h3
          fontWeight="bold"
          fontSize={20}
          textTransform="uppercase"
          color="blue.400"
        >
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
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
        mx="auto"
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color="purple.400">
          <path
            fill="currentColor"
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
    </Flex>
  );
}
