import React, { useContext } from 'react'
import logo from './../../images/candyclub.png'
import { Flex, Spacer, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <Flex flexDirection="row" width="100%" justifyContent="space-around">
          <Link to="/">
            <Image src={logo} alt="logo" boxSize="100px" objectFit="cover" />
          </Link>
          <Link to="/iniciar-sesion">
            <Box>Tienda</Box>
          </Link>
          <Link to="/iniciar-sesion">
            <Box>Sobre Nosotros</Box>
          </Link>
          <Link to="/iniciar-sesion">
            <Box>Iniciar Sesion</Box>
          </Link>
          <Link to="/crear-cuenta">
            <Box>Registrarse</Box>
          </Link>

          <Link to="/perfil">
            <Box>Perfil</Box>
          </Link>
          <Link to="/">
            <Box>Cerrar Sesion</Box>
          </Link>
        </Flex>
      </nav>
    </header>
  )
}
