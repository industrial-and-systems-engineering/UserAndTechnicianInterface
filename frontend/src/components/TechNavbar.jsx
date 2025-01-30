import { HStack, Button, Flex, Container } from '@chakra-ui/react';
import React from 'react';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useColorMode } from './ui/color-mode';

const UserNavbar = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW={"1140"} px={4} py={4}>
            <Flex justifyContent={"space-between"}
                alignItems={"center"}
                h={16}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}>

                <HStack spacing={2} alignItems={"center"}>
                    <Button onClick={() => navigate('/technician')}>Pending Requests</Button>
                    <Button onClick={() => navigate('/technician/completed')}>Completed Requests</Button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun />}
                    </Button>
                </HStack>

            </Flex>
        </Container>

    );
}

export default UserNavbar;