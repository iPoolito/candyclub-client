import React, { useEffect, useContext, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Center, VStack, Heading, Image, Text } from '@chakra-ui/react'
import ORDERS_API from '../api/orders'
import UsersContext from '../context/Users/UsersContex'
import logo from '../images/candyclub.png'

const OrderFinished = ({ deleteCart, cart }) => {
  const ctxUser = useContext(UsersContext)
  const { user } = ctxUser
  const { status } = useParams()
  const history = useHistory()

  const [order, setOrder] = useState({
    prudcts: cart,
    buyer: user._id
  })
  useEffect(() => {
    if (status === 'exito' || status === 'pendiente') {
      setOrder({
        prudcts: cart,
        buyer: user._id
      })
      ORDERS_API.CREATE_ORDER(order)

      deleteCart()
    }

    // TODO: CREAR LA ORDEN, en el backend
  }, [])

  const renderContent = () => {
    switch (status) {
      case 'exito':
        return (
          <>
            <Heading color="pink.500">Gracias por tu compra</Heading>
            <Image src={logo} width="100%" h="200px" />
            <Link to="/">
              <Text color="pink.500">
                <b>Volver</b>
              </Text>
            </Link>
          </>
        )
      case 'pendiente':
        return (
          <>
            <Heading color="pink.500">Tu compra esta siendo procesada</Heading>
            <Image src={logo} width="100%" h="200px" />
            <Link to="/">
              <Text color="pink.500">
                <b>Volver</b>
              </Text>
            </Link>
          </>
        )
      case 'declinado':
        return (
          <>
            <Heading color="pink.500">Algo salio mal</Heading>
            <Image src={logo} width="100%" h="200px" />
            <Link to="/">
              <Text color="pink.500">
                <b>Volver</b>
              </Text>
            </Link>
          </>
        )
      default:
        return (
          <>
            <Heading color="pink.500">Algo salio mal</Heading>
            <Image src={logo} width="100%" h="200px" />
            <Link to="/">
              <Text color="pink.500">
                <b>Volver</b>
              </Text>
            </Link>
          </>
        )
    }
  }

  return (
    <Center>
      <VStack>{renderContent()}</VStack>
    </Center>
  )
}

export default OrderFinished
