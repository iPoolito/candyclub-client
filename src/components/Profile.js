import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Heading, Table, Thead, Tbody, Tr, Th, Text } from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'
import backgroundImage from '../images/fondoRosaCompress.jpg'
export default function Profile() {
  const ctxUser = useContext(UsersContext)
  const { user } = ctxUser
  // console.log(user)
  return (
    <div>
      <Flex
        justifyContent="space-around"
        as="main"
        flexDirection={['column', 'column', 'row', 'row', 'row']}
        width={['100%', '100%', '100%', '100%', '100%']}
        h="calc(100vh - 80px)"
        backgroundImage={backgroundImage}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        align="center"
        justify="center"
        p="24px"
      >
        <Flex
          justifyContent="center"
          flexDir="column"
          alignItems="center"
          width="100%"
          maxWidth="480px"
          minHeight="50%"
          backdropFilter="blur(4px)"
          backgroundColor="rgba(255,255,255,1)"
          borderRadius="12px"
          border="1px solid rgba(255,255,255,0.18)"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
          p={16}
        >
          <Heading as="h1" size="2xl" mb="32px">
            Hola, {user.username}
          </Heading>
          <Text>
            Desde el panel de control de tu cuenta, puedes ver tus pedidos recientes y administrar tu direccion de
            envio.
          </Text>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="480px"
          minHeight="50%"
          backdropFilter="blur(4px)"
          backgroundColor="rgba(255,255,255,1)"
          borderRadius="12px"
          border="1px solid rgba(255,255,255,0.18)"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        >
          <Table
            variant="simple"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            w="100%"
            alignItems="center"
          >
            <Thead>
              <Tr>
                <Th>
                  <Link to="/mis-ordenes">Ordenes </Link>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>
                  <Link to={`/perfil-direccion/${user._id}`}> Direccion </Link>
                </Th>
              </Tr>
              {/* <Tr>
                <Th>Soporte</Th>
              </Tr> */}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </div>
  )
}
