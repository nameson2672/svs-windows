import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  chakra,
} from '@chakra-ui/react';

import type { FAQItemInterface } from '~/../type/dataTypes';

const FAQItem = ({ question, answer }: FAQItemInterface) => {
  return (
    <AccordionItem
      borderColor="gray.200"
      _dark={{
        borderColor: 'gray.700',
      }}
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Box flex="1" textAlign="left" ml={0}>
              <Flex alignItems="center" minH={12}>
                <Box ml={0}>
                  <chakra.dt
                    fontSize={{ base: 'md', md: 'lg' }}
                    fontWeight="medium"
                    lineHeight="6"
                    color="gray.900"
                    _dark={{
                      color: 'white',
                    }}
                  >
                    {question}
                  </chakra.dt>
                </Box>
              </Flex>
            </Box>
            {isExpanded ? (
              <MinusIcon
                fontSize="12px"
                _dark={{
                  color: 'white',
                }}
              />
            ) : (
              <AddIcon
                fontSize="12px"
                _dark={{
                  color: 'white',
                }}
              />
            )}
          </AccordionButton>
          <AccordionPanel pb={4}>
            <chakra.dd
              mt={2}
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              {answer}
            </chakra.dd>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default FAQItem;
