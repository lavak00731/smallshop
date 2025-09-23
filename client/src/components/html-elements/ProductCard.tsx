import styled from 'styled-components';
import type { ProductInterface } from '../../types/ProductInterface';
import { Heading } from './Heading';
 import { Rating } from './Rating';
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: relative;
`
const ImgElem = styled.img` 
  max-width: 100%;
`


export const ProductCard = ({product}:{product:ProductInterface}) => {
  console.log(product)
  return (
    <CardWrapper>
      <ImgElem src={product.thumbnail} alt="" />
      <Heading headingTag={'h2'} text={product.title}/>
      <Rating rating={product.rating} reviews={product.reviews.length} />
    </CardWrapper>
  )
}
