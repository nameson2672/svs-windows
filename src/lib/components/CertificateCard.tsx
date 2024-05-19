import { Flex, Image, Stack, Text } from '@chakra-ui/react';

export const CertificateCard = () => {
  return (
    <div>
      <Flex alignItems="center" gap="20">
        <Stack>
          <Flex w={16} h={16} align="center" justify="center">
            <Text fontWeight="200" fontSize="100" color="gray.100">
              5
            </Text>
            <Text color="gray.100">Years of Warrenty</Text>
          </Flex>
        </Stack>

        <Image src="/made-in-canada-white-logo.svg" />
      </Flex>
    </div>
  );
};
