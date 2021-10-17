import React, { useEffect, useState } from 'react'
import PRODUCTS_API from '../api/products'
import { Button, Flex, Image, Heading, SimpleGrid } from '@chakra-ui/react'

export default function Market() {
  const [listOfProducts, setListOfProducts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const products = await PRODUCTS_API.GET_PRODUCTS()
      // console.log(products)
      setListOfProducts(products)
    }
    fetchData()
  }, [])
  console.log(listOfProducts)
  return (
    <Flex as="main">
      <Heading as="h1" size="lg">
        Productos
      </Heading>
      <Flex>
        {listOfProducts?.map((el, i) => {
          return (
            <SimpleGrid key={i} columns={4} spacing={10}>
              <Flex flexDirection="column" align="center" p="24px">
                <Image src={el.imageUrl} alt="logo" h="100px" w="100px" objectFit="cover" />
              </Flex>
              <Flex flexDirection="column" align="center">
                <Heading as="h2" size="lg">
                  {el.name}
                </Heading>
                <Heading as="h3" size="md">
                  {el.stock}
                </Heading>
                <Heading as="h3" size="md">
                  ${el.price}
                </Heading>
                <Button colorScheme="pink" size="lg" type="submit" px={8} py={8} mt={8} w="100%">
                  Agregar al carrito
                </Button>
              </Flex>
            </SimpleGrid>
          )
        })}
      </Flex>
    </Flex>
  )
}
