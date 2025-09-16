import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";
import { fontStack } from "../../styles/fontStack";

const FooterContainer = styled.footer`
  font-family: ${fontStack.text};
  font-size: 1rem;
  line-height: 1;
  background: ${colorPalette.decorative};
  color: ${colorPalette.white};
  text-shadow: 1px 1px 1px ${colorPalette.black};
  padding: 1rem;
`
const TextContainer = styled.p`
  text-align: center;
`

export const Footer = () => {

  return (
    <FooterContainer>
      <TextContainer>Copyright {new Date().getFullYear()} &copy;</TextContainer>
    </FooterContainer>    
  )
}
