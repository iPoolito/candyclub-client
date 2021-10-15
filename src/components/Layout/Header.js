import React, { useContext } from 'react'
import logo from './../../images/candyclub.png'
import { Flex, Spacer, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContex'

export default function Header() {
  const ctxUser = useContext(UsersContext)

  const { user, authStatus, logoutUser } = ctxUser

  return (
    <Box as="header">
      <Flex width="100%" justify="space-between" align="center" as="nav" px={8} py={4}>
        <Link to="/">
          <Image src={logo} alt="logo" boxSize="100px" objectFit="cover" />
        </Link>
        <Link to="/tienda">
          <Box>Tienda</Box>
        </Link>
        <Link to="/sobre-nosotros">
          <Box>Sobre Nosotros</Box>
        </Link>

        {authStatus ? (
          <>
            <Link to="/perfil">
              <Box>Mi Perfil</Box>
            </Link>
            <Link to="/">
              <Box
                onClick={() => {
                  logoutUser()
                }}
              >
                Cerrar Sesion
              </Box>
            </Link>
          </>
        ) : (
          <>
            <Link to="/iniciar-sesion">
              <Box>Iniciar Sesion</Box>
            </Link>
            <Link to="/crear-cuenta">
              <Box>Registrarse</Box>
            </Link>
          </>
        )}
      </Flex>
    </Box>
  )
}
