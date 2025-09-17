import { MainLayout } from "../../layouts/MainLayout"
import ChangePageTitle  from "../../hooks/ChangePageTitle"
import { Heading } from "../../components/html-elements/Heading";


export const Products = () => {
  ChangePageTitle({pageTitle: 'Products - SmallShop'});
  return (
    <MainLayout>
      <article>
        <Heading headingTag={"h1"} text={'Products'} id="mainHeading" />

      </article>
    </MainLayout>
    
  )
}
