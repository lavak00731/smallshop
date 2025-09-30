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

export const ProductCard = ({product}:{product:ProductInterface}) => {
  return (
    <CardWrapper>
      <ImgElem src={ product.thumbnail } alt="" />
      <Heading headingTag={'h2'} text={ product.title }/>
      <Rating rating={ product.rating } reviews={ product.reviews.length } />
      <ProductDescription>{ product.description }</ProductDescription>
      <ProdLink to={`product/${product.id}`} state={{product}}>See in details <span className="sr-only">{ product.title }</span></ProdLink>
    </CardWrapper>
  )
}
