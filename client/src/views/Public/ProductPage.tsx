import { memo } from 'react';
import type { ProductInterface } from '../../types/ProductInterface';
import { useLocation } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import styled from 'styled-components';
import { fontStack } from '../../styles/fontStack';
import { Heading } from '../../components/html-elements/Heading';
import { CarouselComp } from '../../components/html-elements/CarouselComp';
import { Rating } from '../../components/html-elements/Rating';
import { ReviewDropDown } from '../../components/html-elements/ReviewDropDown';
import { colorPalette } from '../../styles/colorPalette';

const DataGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const MediaWrapper = styled.figure`
  position: relative;
`

const DiscountElem = styled.div`
  display: inline-flex;
  position: absolute;
  top: 0;
  right: 0;
  font-family: ${fontStack.text};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0 0 0 2rem;
  color: ${colorPalette.white};
  background: ${colorPalette.black};
  width: 5rem;
  height: 3rem;  
  align-items: center;
  justify-content: center;
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

const BrandContainer = styled.p`
  font-family: ${fontStack.text}
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 500;
  span {
    font-weight: 700;
  }
`

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
          <MediaWrapper>
            {product.discountPercentage ? <DiscountElem><p><span className="sr-only">Discount</span> { product.discountPercentage }%</p></DiscountElem> : null}
            {product.images.length > 1 ? <CarouselComp images={product.images}/> : <img src={product.thumbnail} alt="" />}  
          </MediaWrapper>                  
          <BrandContainer><span>Brand: </span>{ product.brand }</BrandContainer>       
        </Column>
        <Column>
            <Price>Price: <span>${product.price}</span></Price>
            <Rating rating={product.rating} reviews={product.reviews.length} />            
            <ReviewDropDown reviews={product.reviews} btntext={'See All Reviews'} />
            <Description>{product.description}</Description>
        </Column>
      </DataGrid>      
    </MainLayout>    
  )
}

export const ProductPage = memo(Product);

