import React, { useContext, useState } from 'react'
import { Input, Text, Button, FormControl, FormLabel, Flex, Image, Heading, useToast } from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'
// import backgroundImage from '../images/pnksmall.jpg'
// import logo from '../images/candyclub.png'

export default function CheckOut({ cart, handleAddItem, handleRemoveItem, total }) {
  const toast = useToast()

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
  }
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      flexDirection={['column', 'column', 'row', 'row', 'row']}
      width={['100%', '100%', '50%', '50%', '50%']}
    >
      <Flex flexDirection="column" align="center">
        <Heading>Estas comprando como: </Heading>
        <Heading>
          {user.username} con el correo {user.email}
        </Heading>

        <Flex
          as="form"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          onSubmit={submitData}
          width="100%"
          maxWidth="480px"
          minHeight="80%"
          backdropFilter="blur(4px)"
          backgroundColor="rgba(255,255,255,1)"
          borderRadius="12px"
          border="1px solid rgba(255,255,255,0.18)"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
          p="24px"
        >
          <Heading as="h1" size="lg">
            Dirección de envio
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
        </Flex>
      </Flex>

      <Flex flexDirection="column">
        {Object.keys(cart).map(el => {
          return (
            <Flex justifyContent="space-between" padding="8px 16px" borderBottom="1px solid #eae6e7">
              <Flex width="100%">
                <Image src={cart[el].imageUrl} alt="logo" h="70%" w="30%" objectFit="cover" mb="16px" />
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
        <Flex justifyContent="space-around" w="100%" borderBottom="1px solid #eae6e7" borderTop="1px solid #eae6e7">
          <Text>
            <b>SubTotal </b>
          </Text>
          <Text>
            <b> ${total} </b>
          </Text>
        </Flex>
        <Flex justifyContent="flex-end" mt={10}>
          <Button colorScheme="pink" w="30%" onClick>
            Pagar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
