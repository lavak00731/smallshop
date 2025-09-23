import { memo } from "react";
import { fontStack } from "../../styles/fontStack";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: ${fontStack.titles};
  font-size: 2.8rem;
  line-height: 3rem;
`
const H2 = styled.h2`
  font-family: ${fontStack.titles};
  font-size: 2.4rem;
  line-height: 2.6rem;
`
const H3 = styled.h3`
  font-family: ${fontStack.titles};
  font-size: 2rem;
  line-height: 2.2rem;
`
const H4 = styled.h4`
  font-family: ${fontStack.titles};
  font-size: 1.8rem;
  line-height: 2rem;
`
const H5 = styled.h5`
  font-family: ${fontStack.titles};
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`
const H6 = styled.h6`
  font-family: ${fontStack.titles};
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 800;
  text-style: italic;
`

export const Heading = memo(({headingTag, text, idAttr}:{headingTag:string, text:string, idAttr?:string}) => {
  let element = null; 
  const idProps = idAttr ? { id: idAttr } : {};   
  switch (headingTag) {
          case 'h1':
              element = <H1 { ...idProps }>{text}</H1>
              break;
          case 'h2':
              element = <H2 { ...idProps }>{text}</H2>
              break;
          case 'h3':
              element = <H3 { ...idProps }>{text}</H3>
              break;
          case 'h4':
              element = <H4 { ...idProps }>{text}</H4>
              break;
          case 'h5':
              element = <H5 { ...idProps }>{text}</H5>
              break;
          case 'h6':
              element = <H6 { ...idProps }>{text}</H6>
              break;
          default:
              break;
    }
    return element;
})
