import { Nav } from "../components/html-elements/Nav";
import { Footer } from "../components/html-elements/Footer";
export const MainLayout = ({ children }) => {
    return (
    <>
        <Nav/>
            <main aria-labelledby="mainHeading">
                {children}
            </main>
        <Footer/>
    </>
  )
}
