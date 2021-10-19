import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Flex
        backgroundImage="url('https://images.unsplash.com/photo-1516414559093-91c1c3d7359c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
        color="white"
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        height="70vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="4rem"
        minHeight="500px"
        backgroundAttachment="fixed"
        backgroundPosition="center"
      >
        <Heading as="h1" size="2xl">
          Preguntas Frecuentes
        </Heading>
      </Flex>

      <Flex as="main" width="100%" flexDirection="column" height="40vh" justifyContent="space-between" align="center">
        <Flex width="40%" justifyContent="center" align="center" flexDirection="column">
          <Box>
            <Heading as="h1" size="lg" color=" #dc3448" mb="32px" mt="32px">
              ¿SON TODOS LOS PRODUCTOS?
            </Heading>
            <p>
              Todos los días recibimos productos nuevos, el inventario de la tienda en línea puede tener variaciones al
              de la tienda física. Si viste en nuestras redes algún producto en específico de tu interés puedes
              preguntar disponibilidad a través del chat de este sitio web.
            </p>
          </Box>
        </Flex>
        <Flex width="40%" justifyContent="center" align="center" flexDirection="column">
          <Box>
            <Heading as="h1" size="lg" color="#dc3448" mb="32px" mt="32px">
              ¿CUÁL ES EL COSTO DE ENVÍO LOCAL?
            </Heading>
            <p>
              Aplica únicamente para Morelos y su área metropolitana dependiendo la zona de entrega, el costo es entre
              $40 y $60 MXN.
            </p>
          </Box>
        </Flex>
        <Flex width="40%">
          <Box>
            <Heading as="h1" size="lg" color="#dc3448" mb="32px" mt="32px">
              ¿TIENEN ENVÍOS INTERNACIONALES?
            </Heading>
            <p>
              Si es posible realizar envíos internacionales, puedes ponerte en contacto a través de nuestras redes
              sociales
            </p>
          </Box>
        </Flex>
        <Flex width="40%">
          <Box>
            <Heading as="h1" size="lg" color="#dc3448" mb="32px" mt="32px">
              ¿SOLO ESTÁN EN MORELOS?
            </Heading>
            <p>Al momento contamos con 1 punto de venta únicamente en Morelos.</p>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
