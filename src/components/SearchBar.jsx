import React from "react";
import { Button, Flex, Input } from '@chakra-ui/react'

export default function SearchBar(){
    return (
        <>
        <Flex gap='2' >
            <Input width='md' />
            <Button colorScheme='teal'> Search </Button>   
        </Flex>
        
        </>
    )
}