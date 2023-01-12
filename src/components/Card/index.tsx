import React from "react";
import {
  Center,
  Box,
  Image,
  AspectRatio,
  Stack,
  Heading,
  Text,
  HStack,
} from "native-base";

interface CardProps {
  image: string;
  tag: boolean;
  titlle: string;
  observation: string;
  description: string;
  date: string;
}

export default function Cards(props: CardProps) {
  return (
    <Box alignItems="center" safeAreaTop="8" safeAreaBottom="8">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: props.image,
              }}
              alt="image"
            />
          </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
              display={props.tag == false && 'none'}
            >
              {props.tag == false ? "" : "Disponível para adoção"}
            </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.titlle}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {props.observation}
            </Text>
          </Stack>
          <Text fontWeight="400">{props.description}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {props.date}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
