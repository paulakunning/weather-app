import { Center, Heading, Flex, Icon} from "@chakra-ui/react";
import React from "react";
import Card from "./Card"
import { FcSearch } from 'react-icons/fc'

export default function Cards ({ cities, onClose }) {
    return (
      <Center maxW="full" mt='8' flexWrap="wrap" gap="4">
        {cities.length ? (
          cities.map((c) => (
            <Card
              key={c.id}
              temp={c.temp}
              min={c.min}
              max={c.max}
              name={c.name}
              weather={c.weather}
              clouds={c.clouds}
              img={c.img}
              id={c.id}
              onClose={() => onClose(c.id)}
            />
          ))
        ) : (
          <Flex
            wrap="wrap"
            mt={['20', '40']}
            p="10"
            justifySelf="center"
            alignContent="center"
          >
            {" "}
            <Heading color="gray.500">
              {" "}
              <Icon as={FcSearch} /> What's the weather today in your city?{" "}
            </Heading>{" "}
          </Flex>
        )}
      </Center>
    );
}