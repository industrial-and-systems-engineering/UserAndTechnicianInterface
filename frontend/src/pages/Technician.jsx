import React, { useEffect, useState } from 'react';
import { Container, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { useEquipmentStore } from '../Store/equipment';
import TequipmentCard from '@/components/TequipmentCard';

const Technician = () => {
    const { fetchPendingRequest, Equipment } = useEquipmentStore();
    const [localEquipment, setLocalEquipment] = useState([]);

    useEffect(() => {
        fetchPendingRequest();
    }, [fetchPendingRequest]);

    useEffect(() => {
        setLocalEquipment(Equipment); // Sync local state with store initially
    }, [Equipment]);

    // Function to remove an updated equipment from local state
    const handleEquipmentUpdate = (id) => {
        setLocalEquipment((prev) => prev.filter((eq) => eq._id !== id));
    };

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <Text>Current Equipments</Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
                    {localEquipment.map((equipment) => (
                        <TequipmentCard
                            key={equipment._id}
                            equipment={equipment}
                            onUpdate={() => handleEquipmentUpdate(equipment._id)} // Pass update function
                        />
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    );
};

export default Technician;
