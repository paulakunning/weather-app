import React from "react";
import { Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from "react";
import { FcOk, FcHighPriority} from "react-icons/fc";

export default function SearchBar({onSearch}) {
    const [ city, setCity ] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        onSearch(city)
        setCity("")
    }

    function handleInvalid(city){
        if (!/^[a-zA-Z ]*$/.test(city)) return true
        return false
    }

    function handleChange(e){
        setCity(e.target.value)
    }

    return (
        <form
        onSubmit={(e) => {
            handleSubmit(e);
        }}
        >
        <Flex gap="2">
            <InputGroup>
            <Input
                maxW="lg"
                color="teal.500"
                focusBorderColor="teal"
                _placeholder={{ color: "teal" }}
                type="text"
                placeholder="City..."
                value={city}
                isInvalid={handleInvalid(city)}
                errorBorderColor="crimson"
                onChange={(e) => handleChange(e)}
            />
            <InputRightElement
                children={
                handleInvalid(city) === false ? <FcOk /> : <FcHighPriority />
                }
            />
            </InputGroup>
            <Button type="submit" colorScheme="teal">
            {" "}
            Search{" "}
            </Button>
        </Flex>
        </form>
    );
}