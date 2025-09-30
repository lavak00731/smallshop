import styled from 'styled-components';
import type { ProductInterface } from '../../types/ProductInterface';
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

export const ProductCard = ({product}:{product:ProductInterface}) => {
  console.log(product)
  return (
    <CardWrapper>
      <ImgElem src={ product.thumbnail } alt="" />
      <Heading headingTag={'h2'} text={ product.title }/>
      <Rating rating={ product.rating } reviews={ product.reviews.length } />
      <ProductDescription>{ product.description }</ProductDescription>
    </CardWrapper>
  )
}
