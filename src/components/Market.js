import React, { useEffect, useState } from 'react'
import PRODUCTS_API from '../api/products'
import { Button, Flex, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import useCart from '../Hooks/useCart'
import backgroundImage from '../images/pnksmall.jpg'

export default function Market() {
  const [listOfProducts, setListOfProducts] = useState(null)

  const { cart, handleAddItem, handleRemoveItem } = useCart()

  useEffect(() => {
    const fetchData = async () => {
      const products = await PRODUCTS_API.GET_PRODUCTS()
      // console.log(products)
      setListOfProducts(products)
    }
    fetchData()
  }, [])

  const disableButton = id => {
    const item = cart[id]
    if (item?.qty >= 1) {
      return false
    }
    return true
  }
  return (
    <Flex
      as="main"
      w="100%"
      h="calc(100vh - 80px)"
      backgroundColor=" #fbd3d4 "
      // backgroundImage={backgroundImage}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
      justify="flex-start"
      p="24px"
      flexDirection="column"
    >
      <Flex align="center" justify="center" w="100%">
        <Heading as="h1" size="lg" w="100%" mb="40px">
          Productos
        </Heading>
      </Flex>
      <Flex>
        <SimpleGrid columns={4} spacing={10}>
          {listOfProducts?.map((el, i) => {
            return (
              <Flex
                flexDirection="column"
                key={i}
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
                <Flex align="center" justify="center" width="100%">
                  <Image src={el.imageUrl} alt="logo" h="100px" w="100px" objectFit="cover" />
                </Flex>
                <Flex flexDirection="column" align="center">
                  <Heading as="h2" size="lg">
                    {el.name}
                  </Heading>
                  <Heading as="h3" size="md">
                    ${el.price}
                  </Heading>

                  <Flex justifyContent="center" p="24px">
                    <Button
                      colorScheme="pink"
                      size="lg"
                      type="submit"
                      px={8}
                      py={8}
                      mt={8}
                      w="25%"
                      disabled={disableButton(el._id)}
                      onClick={() => handleRemoveItem(el)}
                    >
                      -
                    </Button>

                    <Heading as="h3" size="md">
                      {cart[el._id]?.qty || 0}
                    </Heading>

                    <Button
                      colorScheme="pink"
                      size="lg"
                      type="submit"
                      px={8}
                      py={8}
                      mt={8}
                      w="25%"
                      onClick={() => handleAddItem(el)}
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
