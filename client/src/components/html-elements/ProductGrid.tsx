import styled from "styled-components";
import type { ProductInterface } from "../../types/ProductInterface";
import { ProductCard } from "./ProductCard";
import { media } from "../../styles/breakpoints";

const GridWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-row: 1fr;
    grid-gap: 1rem;
    ${media.md} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${media.lg} {
        grid-template-columns: repeat(3, 1fr);
    }   
    ${media.xl} {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const ProductGrid = ({productList}:{productList:ProductInterface[]}) => {
    if(productList.length === 0) {
        return <p>No products available</p>
    }
  return (
    <GridWrapper>
        {
            productList.map((product:ProductInterface)=>{
                return <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            })
        }
    </GridWrapper>
  )
}
