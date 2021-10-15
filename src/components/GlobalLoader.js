import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'
export default function GlobalLoader() {
  return (
    <Center as="main" w="100%" h="100vh">
      <Spinner size="xl" />
    </Center>
  )
}
