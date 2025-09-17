import styled from "styled-components";
import { Nav } from "../components/html-elements/Nav";
import { Footer } from "../components/html-elements/Footer";

const MainElem = styled.main`
    padding: 1rem;
    max-width: 1440px;
    margin: 0 auto;
`
export const MainLayout = ({ children }) => {
    return (
    <>
        <Nav/>
            <MainElem aria-labelledby="mainHeading">
                {children}
            </MainElem>
        <Footer/>
    </>
  )
}
