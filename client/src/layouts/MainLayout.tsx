import styled from "styled-components";
import { Nav } from "../components/html-elements/Nav";
import { Footer } from "../components/html-elements/Footer";
import { media } from "../styles/breakpoints";

const MainElem = styled.main`
    padding: 1rem;
    max-width: 1440px;
    margin: 0 auto;
    ${media.lg} {
        min-height: calc( 100dvh - 132px );
    }

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
