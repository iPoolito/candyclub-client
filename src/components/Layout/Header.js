import React, { useContext } from 'react'
import logo from './../../images/candyclub.png'
import { Flex, Spacer, Box, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContex'

export default function Header() {
  const ctxUser = useContext(UsersContext)

  const { user, authStatus, logoutUser } = ctxUser

  return (
    <Box as="header" h="80px">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          display={['block', 'block', 'none', 'none', 'none']}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>

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
