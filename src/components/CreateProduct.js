import React, { useContext, useState } from 'react'
import { Input, Button, FormControl, FormLabel, Flex, Image, Heading, useToast, Select } from '@chakra-ui/react'
import backgroundImage from '../images/pnksmall.jpg'
import { useHistory } from 'react-router-dom'
import logo from '../images/candyclub.png'
import axios from 'axios'
import PRODUCTS_API from '../api/products'

export default function CreateProduct() {
  const toast = useToast()
  const history = useHistory()
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: '',
    category: '',
    brand: '',
    stock: ''
  })
  const [featured, setFeatured] = useState(false)

  const handleChange = event => {
    setNewProduct(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const submitData = event => {
    event.preventDefault()
    PRODUCTS_API.CREATE_PRODUCT({ ...newProduct, featured: Boolean(featured) })
    toast({
      title: 'Producto Creado.',
      description: 'Se ha creado el producto.',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
    history.push('/tienda')
  }

  const handleUploadPhoto = async ({ target: { files } }) => {
    console.log(files[0])
    const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dmuqufno4/image/upload'

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'candyclub')
    const {
      data: { secure_url }
    } = await axios.post(cloudinaryAPI, data)
    console.log(secure_url)
    setNewProduct(prevState => ({ ...prevState, imageUrl: secure_url }))
  }

  console.log(featured)

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
          Nuevo Producto
        </Heading>

        <FormControl id="username" isRequired py={4}>
          <FormLabel>Nombre</FormLabel>
          <Input
            placeholder="Capitan Crunch"
            name="name"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newProduct.name}
          />
        </FormControl>

        <FormControl id="username" isRequired py={4}>
          <FormLabel>Precio</FormLabel>
          <Input
            placeholder="180"
            name="price"
            onChange={handleChange}
            focusBorderColor="pink.500"
            type="number"
            value={newProduct.price}
          />
        </FormControl>

        <FormControl id="username" isRequired py={4}>
          <FormLabel>Descripcion</FormLabel>
          <Input
            placeholder="Un cereal muy rico"
            name="description"
            onChange={handleChange}
            focusBorderColor="pink.500"
            value={newProduct.description}
          />
        </FormControl>
        <FormControl id="username" isRequired py={4}>
          <FormLabel>Imagen</FormLabel>
          <Input name="imageUrl" focusBorderColor="pink.500" type="file" onChange={handleUploadPhoto} />
        </FormControl>
        <FormControl id="username" isRequired py={4}>
          <Select
            placeholder="Destacado"
            colorScheme="pink"
            name="featured"
            value={featured}
            onChange={e => setFeatured(e.target.value)}
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </Select>
        </FormControl>
        <FormControl id="username" isRequired py={4}>
          <FormLabel>Stock</FormLabel>
          <Input placeholder="3" name="stock" onChange={handleChange} focusBorderColor="pink.500" type="number" />
        </FormControl>

        <Button colorScheme="pink" size="lg" type="submit" px={8} py={8} mt={8} w="100%">
          Crear Producto
        </Button>
      </Flex>
    </Flex>
  )
}
