import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import PRODUCTS_API from '../api/products'

export default function Home() {
  const [sliderRef] = useKeenSlider({ loop: true })
  const [listOfProducts, setListOfProducts] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const featuredProducts = await PRODUCTS_API.GET_FEATURED()
      setListOfProducts(featuredProducts)
    }
    fetchData()
  }, [])
  return (
    <>
      {/* <div ref={sliderRef} className="keen-slider">
        {listOfProducts?.map((product, i) => {
          return (
            <div className={`keen-slider__slide number-slide${i + 1}`}>
              <img src={product.imageUrl} alt="producto" />
            </div>
          )
        })}
      </div> */}

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </>
  )
}
