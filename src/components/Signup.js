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
  Flex
} from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'

export default function Signup() {
  const ctxUser = useContext(UsersContext)
  const { registerUser } = ctxUser

  const [show, SetShow] = useState(false)
  const handleShow = () => SetShow(!show)

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    })
    // console.log(newUser)
  }

  const submitData = event => {
    event.preventDefault()

    registerUser(newUser)
  }

  return (
    <Flex as="main" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        onSubmit={e => {
          submitData(e)
        }}
      >
        <FormControl id="username" isRequired px={8} py={4}>
          <FormLabel>Nombre de Usuario</FormLabel>
          <Input
            placeholder="candyclub"
            name="username"
            onChange={e => {
              handleChange(e)
            }}
          />
        </FormControl>

        <FormControl id="email" isRequired px={8} py={4}>
          <FormLabel>Correo</FormLabel>
          <Input
            type="email"
            placeholder="candyclub@candyclub.com"
            name="email"
            onChange={e => {
              handleChange(e)
            }}
          />
          <FormHelperText>Nunca compartiremos tu correo.</FormHelperText>
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
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShow}>
                {show ? 'Ocultar' : 'Mostrar'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <FormHelperText>Debe de tener 6 caracteres minimo</FormHelperText>
        </FormControl>

        <Button colorScheme="pink" size="lg" type="submit" px={8} py={4}>
          Crear cuenta
        </Button>
      </Flex>
    </Flex>
  )
}
