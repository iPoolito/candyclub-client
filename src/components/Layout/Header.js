import React, { useContext, useRef } from 'react'
import logo from './../../images/candyclub.png'
import {
  Flex,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader
} from '@chakra-ui/react'
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

export default function Header({ cart, handleAddItem, handleRemoveItem, total }) {
  const ctxUser = useContext(UsersContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { authStatus, logoutUser, user } = ctxUser

  return (
    <Box as="header" h="80px">
      <Flex width="100%" h={['100%', '100%', 'unset', 'unset', 'unset']} justify="center" align="center">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            display={['block', 'block', 'none', 'none', 'none']}
            w="10%"
            alignSelf="center"
            position="absolute"
            left={8}
          />
          <Image
            src={logo}
            alt="logo"
            h="70px"
            w="70px"
            objectFit="cover"
            display={['block', 'block', 'none', 'none', 'none']}
          />
          <MenuList>
            <Link to="/">
              <MenuItem icon={<StarIcon />}>Principal</MenuItem>
            </Link>

            <Link to="/tienda">
              <MenuItem icon={<ExternalLinkIcon />}>Tienda</MenuItem>
            </Link>
            <Link to="/sobre-nosotros">
              <MenuItem icon={<QuestionIcon />}>Preguntas Frecuentes</MenuItem>
            </Link>

            {authStatus ? (
              <>
                <Link to="/perfil">
                  <MenuItem icon={<ViewIcon />}>Mi perfil </MenuItem>
                </Link>

                <MenuItem>
                  <span className="material-icons" onClick={onOpen} ref={btnRef} colorScheme="pink">
                    shopping_cart
                  </span>
                  <p onClick={onOpen} ref={btnRef}>
                    {' '}
                    Carrito
                  </p>
                </MenuItem>

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
          <Box>Preguntas Frecuentes</Box>
        </Link>

        {authStatus ? (
          <>
            <Link to="/perfil">
              <Box>Mi Perfil</Box>
            </Link>

            <>
              <span className="material-icons" onClick={onOpen} ref={btnRef}>
                shopping_cart
              </span>

              <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="sm">
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Mi carrito</DrawerHeader>
                  <DrawerBody>
                    {Object.keys(cart).map(el => {
                      return (
                        <Flex justifyContent="space-between" padding="8px 16px" borderBottom="1px solid #eae6e7">
                          <Flex width="100%">
                            <Image src={cart[el].imageUrl} alt="logo" h="100%" w="60%" objectFit="cover" mb="16px" />
                          </Flex>
                          <Flex flexDirection="column" justifyContent="space-between">
                            <p>
                              <b>{cart[el].name}</b>
                            </p>
                            <p>Cantidad:{cart[el].qty} </p>
                            <Flex width="calc(100% - 110px)">
                              <p>${cart[el].price}</p>
                            </Flex>
                          </Flex>
                        </Flex>
                      )
                    })}
                  </DrawerBody>
                  <Flex
                    justifyContent="space-between"
                    w="100%"
                    borderBottom="1px solid #eae6e7"
                    borderTop="1px solid #eae6e7"
                  >
                    <p>
                      <b>SubTotal </b>
                    </p>
                    <p>
                      <b> ${total} </b>
                    </p>
                  </Flex>
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button colorScheme="pink">Pagar</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>

            {user && user.role === 'admin' ? (
              <Link to="/crear-producto">
                <Box>Crear producto</Box>
              </Link>
            ) : null}

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
