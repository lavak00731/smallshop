import { MainLayout } from "../../layouts/MainLayout"
import useChangePageTitle  from "../../hooks/useChangePageTitle"
import { Heading } from "../../components/html-elements/Heading";
import { useEffect, useState } from "react";
import service from "../../service/service";
import { ProductGrid } from "../../components/html-elements/ProductGrid";

export const Products = () => {
  const [productList, setProductList] = useState([]);
  const [skip, setSkip] = useState<number>(0);
  useChangePageTitle({pageTitle: 'Products - SmallShop'});
  const getProducts = async () => {
     const {total, products} = await service(`https://dummyjson.com/products?limit=10&skip=${skip}`);
     setProductList(products);
    console.log(total);
    console.log(products)
  }

  useEffect(() => {
    getProducts()
  
    return () => {
      
    }
  }, [])
  
  return (
    <MainLayout>
      <article>
        <Heading headingTag={"h1"} text={'Products'} idAttr="mainHeading" />
        <ProductGrid productList={productList} />
      </article>
    </MainLayout>
    
  )
}
