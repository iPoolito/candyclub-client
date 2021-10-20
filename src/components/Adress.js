import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Button, FormControl, FormLabel, Flex, Image, Heading, useToast } from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'
import backgroundImage from '../images/pnksmall.jpg'
import logo from '../images/candyclub.png'

export default function Adress() {
  const toast = useToast()
  const history = useHistory()
  const ctxUser = useContext(UsersContext)
  const { registerAdress, user } = ctxUser

  const [newAdress, setNewAdress] = useState(() => ({
    ...user.adress
  }))

  const handleChange = event => {
    setNewAdress(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const submitData = event => {
    event.preventDefault()

    registerAdress({ newAdress })

    toast({
      title: 'Direccion actualizada.',
      description: 'Hemos actualizado tu direccion.',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
    history.push('/perfil')
  }

  return (
    <Flex
      as="main"
      w="100%"
      minHeight="calc(100vh - 80px)"
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
        onSubmit={submitData}
        backdropFilter="blur(4px)"
        backgroundColor="rgba(255,255,255,1)"
        borderRadius="12px"
        border="1px solid rgba(255,255,255,0.18)"
        w="100%"
        maxWidth="480px"
        minHeight="80%"
        p="24px"
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      >
        <Image src={logo} alt="logo" h="100px" w="100px" objectFit="cover" />

        <Heading as="h1" size="lg">
          Dirección
        </Heading>

        <FormControl id="username" isRequired py={4}>
          <FormLabel>Calle y Número</FormLabel>
          <Input
            placeholder="San salvador #101"
            name="street"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newAdress.street}
          />
        </FormControl>

        <FormControl id="username" isRequired py={4}>
          <FormLabel>Colonia</FormLabel>
          <Input
            placeholder="Pedregal de las fuentes"
            name="suburb"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newAdress.suburb}
          />
        </FormControl>

        <FormControl id="username" isRequired py={4}>
          <FormLabel>Código Postal</FormLabel>
          <Input
            placeholder="57100"
            name="cp"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newAdress.cp}
          />
        </FormControl>
        <FormControl id="username" isRequired py={4}>
          <FormLabel>Delegación/Municipio</FormLabel>
          <Input
            placeholder="Cuernavaca"
            name="town"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newAdress.town}
          />
        </FormControl>
        <FormControl id="username" isRequired py={4}>
          <FormLabel>Estado</FormLabel>
          <Input
            placeholder="Morelos"
            name="state"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newAdress.state}
          />
        </FormControl>

        <Button colorScheme="pink" size="lg" type="submit" px={8} py={8} mt={8} w="100%">
          Agregar Dirección
        </Button>
      </Flex>
    </Flex>
  )
}
