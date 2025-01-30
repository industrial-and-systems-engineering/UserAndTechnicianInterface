import React, { useEffect } from 'react'
import { Container, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import { useEquipmentStore } from '../Store/equipment'
import EquipmentCard from '@/components/EquipmentCard';

const User = () => {
    const { fetchPendingRequest, Equipment } = useEquipmentStore();
    useEffect(() => {
        fetchPendingRequest();
    }, [fetchPendingRequest]);
    console.log(Equipment)
    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <Text
                // fontSize={"30"}
                // fontWeight={"Bold"}
                // bgGradient="linear(to-r, #7928CA,#FF0080)"
                // bgClip="text"
                // textAlign="center"
                >
                    Current Equipments
                </Text>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={10}
                    w={"full"}
                >
                    {Equipment.map((equipment) => (
                        <EquipmentCard key={equipment._id} equipment={equipment} />
                    ))}
                </SimpleGrid>
            </VStack>


        </Container>
    )
}

export default User
