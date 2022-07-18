import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = () =>{
    return(
        <Flex w="100%">
            <Avatar size="lg" name="Dan Abrahamov" src="https://bit.ly/dan-abramov">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <Flex flexDirection="column" mx="5" justify="center">
                <Text fontSize="lg" fontWeight="bold">
                    Grant Ward
                </Text>
            </Flex>
        </Flex>
    )
}

export default Header;