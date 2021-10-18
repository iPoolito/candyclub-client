import React, { useContext } from 'react'
import logo from './../../images/candyclub.png'
import { Flex, Box, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  StarIcon,
  CheckIcon,
  CloseIcon,
  ViewIcon,
  QuestionIcon
} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContex'

export default function Header() {
  const ctxUser = useContext(UsersContext)

  const { authStatus, logoutUser } = ctxUser

  return (
    <Box as="header" h="80px">
      <Flex width="100%" justifyContent="flex-end">
        {/* h={['100%', '100%', '0%', '0%', '0%']} */}
        <Menu>
          <Image
            src={logo}
            alt="logo"
            h="100%"
            w="70px"
            objectFit="cover"
            display={['block', 'block', 'none', 'none', 'none']}
            mr="34%"
          />
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            display={['block', 'block', 'none', 'none', 'none']}
            h="82px"
            w="10%"
          />
          <MenuList>
            <Link to="/">
              <MenuItem icon={<StarIcon />}>Principal</MenuItem>
            </Link>

            <Link to="/tienda">
              <MenuItem icon={<ExternalLinkIcon />}>Tienda</MenuItem>
            </Link>
            <Link to="/sobre-nosotros">
              <MenuItem icon={<QuestionIcon />}>Sobre Nosotros</MenuItem>
            </Link>

            {authStatus ? (
              <>
                <Link to="/perfil">
                  <MenuItem icon={<ViewIcon />}>Mi perfil </MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem
                    onClick={() => {
                      logoutUser()
                    }}
                    icon={<CloseIcon />}
                  >
                    Cerrar Sesion
                  </MenuItem>
                </Link>
              </>
            ) : (
              <>
                <Link to="/iniciar-sesion">
                  <MenuItem icon={<CheckIcon />}>Iniciar Sesion </MenuItem>
                </Link>
                <Link to="/crear-cuenta">
                  <MenuItem icon={<AddIcon />}>Registrarse</MenuItem>
                </Link>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        width="100%"
        justify="space-between"
        align="center"
        as="nav"
        px={8}
        py={4}
        h="100%"
        display={['none', 'none', 'flex', 'flex', 'flex']}
      >
        <Link to="/">
          <Image src={logo} alt="logo" h="64px" w="64px" objectFit="cover" />
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
