'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function AltHeroPage() {
  return (
    <div className='relative'>
      <video
        src='/assets/nicesa-video.mp4'
        autoPlay={true}
        loop={true}
        controls={false}
        poster='/assets/nileBuilding.png'
        className='w-full md:w-screen h-full -z-20'

      /> 

      <VStack
        w={'full'}
        h={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 0, md: 8 })}
        zIndex={100}
        top={0}
        position={"absolute"}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            The Official website of NICESA -  Nile University of Nigeria Chapter and the Department
            of Civil Engineering
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Who we are
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </div>
  )
}