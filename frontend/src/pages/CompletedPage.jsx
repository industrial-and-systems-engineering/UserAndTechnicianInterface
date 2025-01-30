import React, { useEffect } from 'react'
import { Container, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import EquipmentCard from '@/components/EquipmentCard';
import { useResultStore } from '../Store/result'

const CompletedPage = () => {
    const { Results, fetchResult } = useResultStore();
    React.useEffect(() => {
        fetchResult();
    }, [fetchResult]);
    console.log(Results);
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
                    Callibrated Equipment
                </Text>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={10}
                    w={"full"}
                >
                    {Results.map((eq) => (
                        <EquipmentCard key={eq._id} equipment={eq} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default CompletedPage
