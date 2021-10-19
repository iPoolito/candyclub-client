import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Heading, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'

export default function Profile() {
  const ctxUser = useContext(UsersContext)
  const { user } = ctxUser
  console.log(user)
  return (
    <div>
      <Flex justifyContent="space-around">
        <Table variant="simple" w="30%">
          <Thead>
            <Tr>
              <Th>Ordenes</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>
                {' '}
                <Link to={`/perfil-direccion/${user._id}`}> Direccion </Link>
              </Th>
            </Tr>
            <Tr>
              <Th>Soporte</Th>
            </Tr>
          </Tbody>
        </Table>
        <Flex flexDir="column">
          <Heading as="h1" size="2xl">
            Hola, {user.username}
          </Heading>
          <p>
            Desde el panel de control de tu cuenta, puedes ver tus pedidos recientes, administrar tu direccion de envio.
          </p>
        </Flex>
      </Flex>
    </div>
  )
}
