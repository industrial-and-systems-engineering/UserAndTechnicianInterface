import { Box, Button, Heading, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { useEquipmentStore } from '../Store/equipment'


const EquipmentCard = ({ equipment }) => {

    return (
        <Box p={4}>
            <Box
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >
                <Heading>{equipment.name}</Heading>
                <Text>{equipment.description}</Text>

            </Box>
        </Box>


    )
}

export default EquipmentCard
