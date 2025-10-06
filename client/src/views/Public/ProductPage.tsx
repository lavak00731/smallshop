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

const Product = () => {
  const location = useLocation();
  const product:ProductInterface = location.state?.product;
  console.log(product);
  return (
    <MainLayout>
      <DataGrid>
        <Column>
          <Heading headingTag={'h1'} text={product.title} />
          <Carousel
            modules={[Pagination, Keyboard, A11y, Navigation]}
            pagination={{clickable: true}}
            spaceBetween={50}
            slidesPerView={1}   
            navigation
          >
            {
              product.images.map( img => <SwiperSlide key={Date.now()}><img src={img} alt=""/></SwiperSlide>)
            }
          </Carousel>
        </Column>
        <Column>
        
        </Column>
      </DataGrid>
      
    </MainLayout>
    
  )
}

export const ProductPage = memo(Product);

