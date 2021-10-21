import { useEffect, useState } from 'react'
import PRODUCTS_API from '../api/products'
import { Flex, Image, Heading, Text } from '@chakra-ui/react'
import Pik from '../images/diaCampo.jpeg'
import bPink from '../images/backPinkHome.jpg'
export default function Home() {
  const [listOfProducts, setListOfProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const featuredProducts = await PRODUCTS_API.GET_FEATURED()
      setListOfProducts(featuredProducts)
    }
    fetchData()
  }, [])

  return (
    <Flex
      as="main"
      width={['100%', '100%', '100%', '100%', '100%']}
      inH="calc(100vh - 80px)"
      // backgroundColor=" #fbd3d4 "
      backgroundImage={bPink}
      backgroundRepeat="no-repeat"
      align="center"
      justify="space-between"
      flexDirection="column"
      color="blackAlpha.900"
      p={16}
    >
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Image
              w="100%"
              h={['100%', '100%', '100%', '50%', '50%']}
              maxHeight="270px"
              src={Pik}
              class="d-block w-100"
              alt="..."
            />
          </div>
          {listOfProducts?.map(el => {
            return (
              <div class="carousel-item">
                <Image
                  w="100%"
                  h={['100%', '100%', '100%', '50%', '50%']}
                  maxHeight="270px"
                  src={el.imageUrl}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            )
          })}

          {/* <div class="carousel-item">
            <Image
              w="100%"
              h={['100%', '100%', '100%', '728px', '728px']}
              maxHeight="270px"
              src={Swiss}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <Image
              w="100%"
              h={['100%', '100%', '100%', '728px', '728px']}
              maxHeight="270px"
              src={Oreo}
              class="d-block w-100"
              alt="..."
            />
          </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Flex
        spacing={8}
        mt={8}
        mb={8}
        flexDirection="column"
        align="center"
        justifyContent="center"
        w={['100%', '100%', '60%', '60%', '60%']}
      >
        <Heading mb={8}>Sobre Nosotros</Heading>

        <Text fontSize="xl">
          Somos una empresa comercializadora de alimentos de excelente calidad, comprometida en deleitar con cariño y
          calidez a la comunidad en que nos desenvolvemos. Dedicamos el tiempo necesario a las necesidades de cada
          cliente. Contamos con Dulces y Cereales importados con precios accesibles. Así conseguimos que nuestros
          productos sean una delicia para los ojos y un capricho para el paladar.
        </Text>
      </Flex>
      <Flex justifyContent="space-between" align="center" flexDirection="column">
        <Heading>Siguenos en nuestras redes sociales</Heading>

        <Flex
          px={16}
          justifyContent="space-between"
          w={['100%', '100%', '100%', '100%', '100%']}
          flexDirection={['column', 'column', 'row', 'row', 'row']}
          align="center"
          mt={16}
        >
          <a href="https://www.facebook.com/candyclub.cuerna" target="_blank" rel="noreferrer">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.instagram.com/candyclub.cuerna/" target="_blank" rel="noreferrer">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://www.cristonautas.com/wp-content/uploads/2020/04/instagram-logo-circle.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.tiktok.com/@candyclub.cuerna/" target="_blank" rel="noreferrer">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="http://assets.stickpng.com/images/5cb78671a7c7755bf004c14b.png"
              alt="tiktok"
            />
          </a>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" align="center" flexDirection="column" mt={16}>
        <Heading>Marcas </Heading>

        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          width={['50%', '50%', '70%', '70%', '70%']}
          boxSizing="border-box"
          mt={16}
        >
          <Image
            boxSize="150px"
            mr={8}
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Chips_ahoy_brandlogo.png"
            alt="Chips Ahoy"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="http://assets.stickpng.com/images/5ae22d4c33b73fa43b1a8939.png"
            alt="Kit Kat"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="https://contact.pepsico.com/files/capncrunch/brands/1543851225/capncrunch_logo4@2x.png"
            alt="Capitan Crunch"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cheetos_logo.svg/1200px-Cheetos_logo.svg.png"
            alt="Cheetos"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="https://americanlicorice.com/new/wp-content/uploads/2021/04/rv_brand_logo.png"
            alt="RedVines"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="https://1000marcas.net/wp-content/uploads/2020/10/Oreo-logo.png"
            alt="Oreo"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="https://www.conagrafoodservice.com/sites/g/files/qyyrlu531/files/images/brands/Swiss-Miss-logo_0.png"
            alt="SwissMiss"
            mb={8}
            p={0}
          />
          <Image
            boxSize="150px"
            mr={8}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reese%27s_logo.svg/1200px-Reese%27s_logo.svg.png"
            alt="Rees'es"
            mb={8}
            p={0}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
