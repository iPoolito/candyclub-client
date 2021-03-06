import React, { useEffect, useState } from 'react'
import { Button, Flex, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import PRODUCTS_API from '../api/products'

export default function Market({ cart, handleAddItem, handleRemoveItem, total }) {
  const [listOfProducts, setListOfProducts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const products = await PRODUCTS_API.GET_PRODUCTS()
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
      minH="calc(100vh - 80px)"
      backgroundColor=" #fbd3d4 "
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
      justify="center"
      p="24px"
      flexDirection="column"
    >
      <Flex align="center" justifyContent="flex-end" w="100%" flexDir="row">
        <Heading as="h1" size="2xl" w="100%" mb="64px" textAlign="center">
          Productos
        </Heading>
      </Flex>

      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
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
              <Image src={el.imageUrl} alt="Producto" h="80%" w="100%" objectFit="cover" mb="56px" />

              <Heading as="h2" textAlign="center" size="lg">
                {el.name}
              </Heading>
              <Heading as="h3" size="lg" mt="16px">
                ${el.price}
              </Heading>

              <Flex justifyContent="space-between" w="100%" alignItems="center">
                <Button
                  colorScheme="pink"
                  size="lg"
                  type="submit"
                  // px={8}
                  // py={8}
                  // mt={8}

                  w="25%"
                  disabled={disableButton(el._id)}
                  onClick={() => handleRemoveItem(el)}
                >
                  -
                </Button>

                <Heading as="h3" size="ls" display="flex" alignItems="flex-start" flexWrap="wrap">
                  Cantidad: {cart[el._id]?.qty || 0}
                </Heading>

                <Button
                  colorScheme="pink"
                  size="lg"
                  type="submit"
                  // px={8}
                  // py={8}
                  // mt={8}
                  w="25%"
                  onClick={() => handleAddItem(el)}
                >
                  +
                </Button>
              </Flex>
            </Flex>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}
