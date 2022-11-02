import React from "react";
import { Box, CloseButton, Stack, Text, Image } from '@chakra-ui/react'

export default function Card ({min, max, name, img, weather,temp, onClose}) {
    return (
      <>
        <Box
          p="4"
          m="4"
          w="sm"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="sm"
        >
          <Stack alignItems="flex-end">
            <CloseButton onClick={onClose} size="md" color="red.400" />
          </Stack>
          <Stack alignItems="center">
            <Text fontSize="4xl" fontWeight="bold">
              {name}
            </Text>
            <Box backgroundColor="whiteAlpha.100" borderRadius="full">
              <Image
                src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              />
            </Box>
            <Stack>
              <Text fontSize="5xl" alignSelf="center">
                {temp} ºC{" "}
              </Text>
              <Text alignSelf="center"> {weather} </Text>
              <Text fontSize="2xl">
                {" "}
                Min: {min} ºC / Max: {max} ºC{" "}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </>
    );
}