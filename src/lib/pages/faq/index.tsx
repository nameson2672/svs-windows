'use client';

import { Accordion, Box, Flex, Link, chakra, Text } from '@chakra-ui/react';

import FAQItem from '~/lib/components/card/FaqItemCard';

export default function Faq() {
  return (
    <Flex
      bg="gray.200"
      _dark={{
        bg: 'gray.600',
      }}
      p={{ base: '2', md: '20' }}
      mt={{ base: '8', md: '10' }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg="white"
        _dark={{
          bg: 'gray.900',
        }}
        rounded="xl"
        w={{ base: '500px', md: '700px', lg: '1000px' }}
        shadow="base"
      >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 2,
            lg: 8,
          }}
        >
          <Box textAlign="center">
            <chakra.h2
              mt={2}
              fontSize={{
                base: '2xl',
                sm: '4xl',
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              _dark={{
                color: 'gray.100',
              }}
            >
              Frequently Asked Questions
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize={{ base: 'md', md: 'xl' }}
              mx={{
                lg: 'auto',
              }}
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              Hope it helps you.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Accordion allowMultiple>
              <FAQItem
                question="How do I place an order for custom windows and doors?"
                answer="Placing an order with SVS Windows and Door is simple! You can either contact us directly through our website or visit our showroom to discuss your requirements with one of our experts. We'll guide you through the process from design to installation."
              />

              <FAQItem
                question="What materials do you use for your windows and doors?"
                answer="We offer a wide range of materials to suit your preferences and budget, including high-quality wood, aluminum, vinyl, and composite materials. Each material has its unique benefits, and our team can help you choose the best option for your project."
              />

              <FAQItem
                question="Do you provide installation services?"
                answer="Yes, we do! Our experienced installation team ensures that your custom windows and doors are installed with precision and care, guaranteeing a perfect fit and optimal performance. We take pride in our workmanship and strive to exceed your expectations at every step."
              />

              <FAQItem
                question="Can I request energy-efficient windows and doors?"
                answer="Absolutely! We understand the importance of energy efficiency, and we offer a variety of options, including double or triple-pane glass, low-emissivity coatings, and insulated frames. Our energy-efficient windows and doors help reduce heat loss, lower energy bills, and enhance comfort."
              />

              <FAQItem
                question="What is the warranty coverage for your products?"
                answer="We stand behind the quality of our products, and all SVS Windows and Door installations come with a comprehensive warranty. Our warranty coverage varies depending on the product and materials chosen, and our team will provide you with detailed information before purchase."
              />

              <FAQItem
                question="Do you offer maintenance services for windows and doors?"
                answer="While our windows and doors are designed to require minimal maintenance, we understand the importance of keeping them in top condition. We offer maintenance services to ensure that your windows and doors continue to perform optimally year after year."
              />

              <FAQItem
                question="Can I schedule a consultation to discuss my project?"
                answer="Absolutely! We offer complimentary consultations to discuss your project requirements, answer any questions you may have, and provide expert advice. Simply contact us to schedule a consultation at a time that's convenient for you."
              />
            </Accordion>
            <Box mt={6} textAlign="center">
              <Text fontSize="lg" color="gray.600" mb={2}>
                Have more questions?
              </Text>
              <Link
                href="mailto:support@svswindows.com"
                isExternal
                fontSize="lg"
                color="brand.600"
                _dark={{
                  color: 'brand.400',
                }}
                fontWeight="medium"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Write to us!
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
