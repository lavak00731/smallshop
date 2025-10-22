import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { memo } from 'react';

const CarouselElem = styled(Swiper)`
  width: 100%;
`

// Keep a stable reference to Swiper modules so the modules prop
// doesn't receive a new array each render (that causes re-init/flicker).
const SWIPER_MODULES = [Pagination, Keyboard, A11y, Navigation];

const Carousel = ({images}:{images:string[]}) => {
  return (
    <CarouselElem
        modules={SWIPER_MODULES}
        pagination={{clickable: true}}
        spaceBetween={50}
        slidesPerView={1}
        navigation
    >
      {images.map((img, i) => (
        // prefer the image URL as a stable key; fall back to index
        <SwiperSlide key={img ?? `slide-${i}`}>
          <img src={img} alt="" style={{width: '100%'}} />
        </SwiperSlide>
      ))}
    </CarouselElem>
  )
}

export const CarouselComp = memo(Carousel)