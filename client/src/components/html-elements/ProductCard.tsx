import styled from 'styled-components';
import type { ProductInterface } from '../../types/ProductInterface';
import { Link } from 'react-router-dom';
import { fontStack } from '../../styles/fontStack';
import { colorPalette } from '../../styles/colorPalette';
import { Heading } from './Heading';
import { Rating } from './Rating';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: relative;
  border: 2px solid ${colorPalette.decorative};
  border-radius: 0.5rem;
  justify-content: space-between;
`
const ImgElem = styled.img` 
  max-width: 100%;
`
const ProductDescription = styled.p`
  font-family: ${fontStack.text}
  font-size: 1rem;
  line-height: 1.5;
  color: ${colorPalette.black};
`
const ProdLink = styled(Link)`
  font-family: ${fontStack.titles};
  font-size: 1.2rem;
  line-height: 1;
  background: ${colorPalette.buttonlink};
  border: 2px solid ${colorPalette.white};
  border-radius: 0.5rem;
  color: ${colorPalette.white};
  padding: 0.5rem;
  text-align: center;
  font-weight: 600;
  text-decoration: none; 
  &:hover,
  &:focus-visible {
    background: ${colorPalette.white};
    color: ${colorPalette.buttonlink};
    border-color: ${colorPalette.buttonlink};
  }
`

const Price = styled.p`
  font-family: ${fontStack.titles};
  font-size: 1.2rem;
  line-height: 1.5;
  span {
    font-weight: 700;
  }
`

export const ProductCard = ({product}:{product:ProductInterface}) => {
  return (
    <CardWrapper>
      <Heading headingTag={'h2'} text={ product.title }/>
      <ImgElem src={ product.thumbnail } alt="" />      
      <Rating rating={ product.rating } reviews={ product.reviews.length } />
      <Price>Price: <span>${product.price}</span></Price>
      <ProductDescription>{ product.description }</ProductDescription>
      <ProdLink to={`product/${product.id}`} state={{product}}>See in detail <span className="sr-only">{ product.title }</span></ProdLink>
    </CardWrapper>
  )
}
