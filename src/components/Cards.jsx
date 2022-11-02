import { Center } from "@chakra-ui/react";
import React from "react";
import Card from "./Card"

export default function Cards ({ cities, onClose }) {
    return (
      <Center maxW="full" flexWrap="wrap" gap="4">
        {cities.map((c) => (
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
        ))}
      </Center>
    );
}