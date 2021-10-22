import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UnorderedList, ListItem, Flex, Image, Heading, Text } from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'
import backgroundImage from '../images/pnksmall.jpg'
import logo from '../images/candyclub.png'

export default function OrdersProfile() {
  const ctxUser = useContext(UsersContext)
  const { user } = ctxUser

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
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
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

        <Heading as="h1" size="lg" mb={4} mt={4}>
          Ordenes
        </Heading>
        <UnorderedList>
          {user.orders?.map((el, i) => {
            return (
              <ListItem key={i} m={2}>
                El id de tu orden es: {el}
              </ListItem>
            )
          })}
        </UnorderedList>

        <Text mt={4}>
          <b> Si tienes duda sobre alguna de tus ordenes contactanos en candyclub.cuerna@gmail.com </b>
        </Text>
        <Link to="/perfil">
          <Text mt={4}>
            <b>Volver </b>
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}
