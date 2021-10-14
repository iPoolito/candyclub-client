import React, { useContext } from 'react'
import logo from './../../images/candyclub.png'
import { Flex, Spacer, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Flex>
        <nav>
          <Link to="/">
            <Image src={logo} alt="logo" boxSize="100px" objectFit="cover" />
          </Link>
          <Link to="/iniciar-sesion">
            <Box>Iniciar Sesion</Box>
          </Link>
          <Link to="/crear-cuenta">
            <Box>Registrarse</Box>
          </Link>
        </nav>
      </Flex>
    </header>
  )
}
