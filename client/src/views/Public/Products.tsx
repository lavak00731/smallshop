import { MainLayout } from "../../layouts/MainLayout"
import useChangePageTitle  from "../../hooks/useChangePageTitle"
import { Heading } from "../../components/html-elements/Heading";
import { useEffect } from "react";
import service from "../../service/service";
//import { ProductGrid } from "../../components/html-elements/ProductGrid";

export const Products = () => {
  useChangePageTitle({pageTitle: 'Products - SmallShop'});
  const getProducts = async () => {
     
  }

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  
  return (
    <MainLayout>
      <article>
        <Heading headingTag={"h1"} text={'Products'} id="mainHeading" />
        {/* <ProductGrid /> */}
      </article>
    </MainLayout>
    
  )
}
