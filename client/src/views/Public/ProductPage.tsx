import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import type { ProductInterface } from '../../types/ProductInterface';
import { useLocation } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import styled from 'styled-components';
import { fontStack } from '../../styles/fontStack';
import { Heading } from '../../components/html-elements/Heading';

const DataGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Carousel = styled(Swiper)`
  width: 100%;
`

const Description = styled.p`
  font-family: ${fontStack.text};
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`
const Price = styled.p`
  font-family: ${fontStack.titles};
  font-size: 1.2rem;
  line-height: 1.5;
  span {
    font-weight: 700;
  }
`
const swiperModules = [Pagination, Keyboard, A11y, Navigation];

const Product = () => {
  const location = useLocation();
  const product:ProductInterface = location.state?.product;
  // if product not passed via Link state, avoid runtime errors and show a message
  if (!product) {
    return (
      <MainLayout>
        <Heading headingTag={'h1'} text="Product not found" />
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <DataGrid>
        <Column>
          <Heading headingTag={'h1'} text={product.title} />
          <Carousel
            modules={swiperModules}
            pagination={{clickable: true}}
            spaceBetween={50}
            slidesPerView={1}   
            navigation
          >
            {
              product.images.map((img, i) => (
                // use stable key (index) or the image URL if unique
                <SwiperSlide key={img ?? i}><img src={img} alt=""/></SwiperSlide>
              ))
            }
          </Carousel>
          

        </Column>
        <Column>
            <Price>Price: <span>${product.price}</span></Price>
            <Description>{product.description}</Description>
        </Column>
      </DataGrid>
      
    </MainLayout>
    
  )
}

export const ProductPage = memo(Product);

