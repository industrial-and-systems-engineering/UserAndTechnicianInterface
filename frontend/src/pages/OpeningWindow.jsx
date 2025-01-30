import React from 'react'
import { Button, Center, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function OpeningWindow() {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('/user')
    };

    const handleTechnicianClick = () => {
        navigate('/technician')
    };

    return (
        <Center minH="100vh">
            <HStack spacing={4}>
                <Button onClick={handleUserClick}>I am a User</Button>
                <Button onClick={handleTechnicianClick}>I am a Technician</Button>
            </HStack>
        </Center>
    );
}

export default OpeningWindow
