import { MainLayout } from "../../layouts/MainLayout"
import ChangePageTitle  from "../../hooks/ChangePageTitle"

export const Products = () => {
  ChangePageTitle({pageTitle: 'Products - SmallShop'});
  return (
    <MainLayout>
      <article>
        <h1 id="mainHeading">Products</h1>

      </article>
    </MainLayout>
    
  )
}
