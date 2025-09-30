import { memo } from 'react';
import type { ProductInterface } from '../../types/ProductInterface';
import { useLocation } from 'react-router-dom';


export const ProductPage = () => {
  const location = useLocation();
  const product:ProductInterface = location.state?.product;
  console.log(product);
  return (
    <div>ProductPage</div>
  )
}
