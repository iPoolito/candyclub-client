import React, { useContext, useState } from 'react'
import {
  Input,
  InputRightElement,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Image,
  Heading
} from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'

import logo from '../images/candyclub.png'
import backgroundImage from '../images/background.jpg'

export default function Login() {
  const ctxUser = useContext(UsersContext)
  const { loginUser } = ctxUser

  const [show, SetShow] = useState(false)
  const handleShow = () => SetShow(!show)

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    // console.log(userData)
  }

  const submitData = event => {
    event.preventDefault()

    loginUser(userData)
  }

  return (
    <Flex
      as="main"
      w="100%"
      h="calc(100vh - 80px)"
      backgroundImage={backgroundImage}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
      justify="center"
      p="24px"
    >
      <Flex
        as="form"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        onSubmit={e => {
          submitData(e)
        }}
        backdropFilter="blur(4px)"
        backgroundColor="rgba(255,255,255,1)"
        borderRadius="12px"
        border="1px solid rgba(255,255,255,0.18)"
        w="100%"
        maxWidth="480px"
        h={['100%', '100%', '80%', '80%', '80%']}
        p="24px"
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      >
        <Image src={logo} alt="logo" h="160px" w="160px" objectFit="cover" />

        <Heading as="h1" size="lg">
          Iniciar sesión
        </Heading>

        <FormControl id="email" isRequired px={8} py={4}>
          <FormLabel>Correo</FormLabel>
          <Input
            type="email"
            placeholder="candyclub@candyclub.com"
            name="email"
            onChange={e => {
              handleChange(e)
            }}
            focusBorderColor="pink.500"
          />
        </FormControl>

        <FormControl id="password" isRequired px={8} py={4}>
          <FormLabel>Contraseña</FormLabel>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Escribe tu Contraseña"
              name="password"
              onChange={e => {
                handleChange(e)
              }}
              focusBorderColor="pink.500"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShow} colorScheme="pink">
                {show ? 'Ocultar' : 'Mostrar'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="pink" size="lg" type="submit" px={8} py={8} mt={8} w="100%">
          Iniciar sesión
        </Button>
      </Flex>
    </Flex>
  )
}
