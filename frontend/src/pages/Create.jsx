import { useColorModeValue } from '@/components/ui/color-mode'
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEquipmentStore } from '../Store/equipment'
import { Toaster, toaster } from '@/components/ui/toaster'

const Create = () => {
    const [newEquipment, setNewEquipment] = useState({
        name: "",
        description: "",
        CalibrationDetails: ""
    })
    const { CreateEquipmentRequest } = useEquipmentStore();

    const handleAddProduct = async () => {
        const { success, message } = await CreateEquipmentRequest(newEquipment);
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
        }
        setNewEquipment({ name: "", description: "", price: 0, image: "" });
    }
    return (
        <Container maxW={"container.sm"}>
            <Toaster />
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={9}>
                    Create a new Equipment Request
                </Heading>
                <Box
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"lg"}
                    shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Equipment Name"
                            name="name"
                            value={newEquipment.name}
                            onChange={(e) =>
                                setNewEquipment({ ...newEquipment, name: e.target.value })
                            }
                        />
                        <Input
                            placeholder="Description"
                            name="description"
                            value={newEquipment.description}
                            onChange={(e) =>
                                setNewEquipment({ ...newEquipment, description: e.target.value })
                            }
                        />
                        <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                            Add Equipment
                        </Button>

                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default Create
