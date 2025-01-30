import { useState } from 'react';
import { Box, Button, Heading, HStack, Text, Input, Textarea, VStack } from '@chakra-ui/react';
import { useEquipmentStore } from '@/Store/equipment';
import { Toaster, toaster } from '@/components/ui/toaster'

const TequipmentCard = ({ equipment, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [result, setResult] = useState({
        CalibrationDetails: ""
    })
    const { UpdateEquipmentDetails } = useEquipmentStore();

    const handleChange = (e) => {
        setResult({ ...result, CalibrationDetails: e.target.value });
    };

    const handleFinalUpdate = async () => {
        // console.log('Updated Data:', result);
        // You can replace this with an API call to save the data
        const { success, message } = await UpdateEquipmentDetails(equipment._id, result)

        if (!success) {
            toaster.create({
                title: "Failed to add Equipment",
                type: "error"
            })

        }
        else {
            toaster.create({
                title: "Equipment added successfully",
                type: "success"
            })
            onUpdate();
        }
        setIsEditing(false);
    };

    return (
        <Box p={4} shadow="lg" rounded="lg" overflow="hidden">
            <Toaster />
            <Heading>{equipment.name}</Heading>
            <Text>{equipment.description}</Text>

            {isEditing ? (
                <VStack mt={3} align="stretch">
                    <Textarea
                        name="description"
                        value={result.CalibrationDetails}
                        onChange={handleChange}
                        placeholder="Calibration Details"
                    />
                    <HStack>
                        <Button colorScheme="blue" onClick={handleFinalUpdate}>Final Update</Button>
                        <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                    </HStack>
                </VStack>
            ) : (
                <HStack mt={3}>
                    <Button onClick={() => setIsEditing(true)}>Update</Button>
                </HStack>
            )}
        </Box>
    );
};

export default TequipmentCard;
