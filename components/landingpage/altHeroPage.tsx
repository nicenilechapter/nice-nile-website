'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function AltHeroPage() {
  return (
    <>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <video autoPlay width="100%" height="100%" >
        <source src="/assets/intro.mp4" type="video/mp4"/>
      </video>
  
    </Flex>

    <VStack
    w={'full'}
    justify={'center'}
    px={useBreakpointValue({ base: 8, md: 16 })}
    backgroundColor={'white'}>
    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
      <Text
        color={'black'}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
        The Official Website of the Nigeria Institution of Civil Engineers Students Association (NICESA) - Nile University of Nigeria Chapter and the Department of Civil Engineering
      </Text>
      <Stack direction={'row'}>
        <Button
          bg={'blue.400'}
          rounded={'full'}
          color={'white'}
          _hover={{ bg: 'blue.500' }}>
          Show me more
        </Button>
      </Stack>
    </Stack>
    </VStack>
</>
  )
}