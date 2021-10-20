import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import PRODUCTS_API from '../api/products'
import { Flex, Image, Heading, VStack, Box, Text, Button } from '@chakra-ui/react'
import 'keen-slider/keen-slider.min.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
export default function Home() {
  const [listOfProducts, setListOfProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const featuredProducts = await PRODUCTS_API.GET_FEATURED()
      setListOfProducts(featuredProducts)
    }
    fetchData()
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  function ArrowLeft(props) {
    const disabeld = props.disabled ? ' arrow--disabled' : ''
    return (
      <svg
        onClick={props.onClick}
        className={'arrow arrow--left' + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
  }

  function ArrowRight(props) {
    const disabeld = props.disabled ? ' arrow--disabled' : ''
    return (
      <svg
        onClick={props.onClick}
        className={'arrow arrow--right' + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
  }

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {listOfProducts.map((product, i) => (
            <Flex className={`keen-slider__slide number-slide${i + 1}`} flexDirection="column">
              <h2>{product.name}</h2>
              <Image boxSize="150px" objectFit="cover" src={product.imageUrl} alt="Segun Adebayo" />
            </Flex>
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft onClick={e => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />
            <ArrowRight
              onClick={e => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            )
          })}
        </div>
      )}
      <VStack spacing={8} mt={16} mb={16}>
        <Box h="40px" as="h2">
          <Heading>Sobre Nosotros</Heading>
        </Box>
        <Box h="40px" as="p" px={80}>
          <Text fontSize="xl">
            Somos una empresa comercializadora de alimentos de excelente calidad, comprometida en deleitar con cariño y
            calidez a la comunidad en que nos desenvolvemos. Dedicamos el tiempo necesario a las necesidades de cada
            cliente. Contamos con Dulces y Cereales importados con precios accesibles. Así conseguimos que nuestros
            productos sean una delicia para los ojos y un capricho para el paladar.
          </Text>
        </Box>
      </VStack>
      <VStack spacing={8} mt={32}>
        <Box h="40px" as="h2">
          <Heading>Siguenos en nuestras redes sociales</Heading>
        </Box>
        <Flex h="40px" px={16} justifyContent="space-between" w="40%" align="center" mt={16}>
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button colorScheme="pink" leftIcon={<FaInstagram />}>
            Instagram
          </Button>
          <Button colorScheme="red" leftIcon={<FaTiktok />}>
            Tiktok
          </Button>
        </Flex>
      </VStack>
      <VStack spacing={8} mt={16}>
        <Box h="40px" as="h2">
          <Heading>Marcas </Heading>
        </Box>
        <Flex h="40px" px={4} flexWrap="wrap" justifyContent="space-between" w="50%" mb={16}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Chips_ahoy_brandlogo.png"
            alt="Chips Ahoy"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="http://assets.stickpng.com/images/5ae22d4c33b73fa43b1a8939.png"
            alt="Kit Kat"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://contact.pepsico.com/files/capncrunch/brands/1543851225/capncrunch_logo4@2x.png"
            alt="Capitan Crunch"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cheetos_logo.svg/1200px-Cheetos_logo.svg.png"
            alt="Cheetos"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://americanlicorice.com/new/wp-content/uploads/2021/04/rv_brand_logo.png"
            alt="RedVines"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://1000marcas.net/wp-content/uploads/2020/10/Oreo-logo.png"
            alt="Oreo"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://www.conagrafoodservice.com/sites/g/files/qyyrlu531/files/images/brands/Swiss-Miss-logo_0.png"
            alt="SwissMiss"
          />
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reese%27s_logo.svg/1200px-Reese%27s_logo.svg.png"
            alt="Rees'es"
          />
        </Flex>
      </VStack>
    </>
  )
}
