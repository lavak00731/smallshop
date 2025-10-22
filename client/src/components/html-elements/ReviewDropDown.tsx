import { useId, useState } from "react";
import styled from "styled-components";
import { type ReviewInterface } from "../../types/ReviewInterface";
import { colorPalette } from "../../styles/colorPalette";
import { fontStack } from "../../styles/fontStack";

const DropDownWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${colorPalette.decorative};
  color: ${colorPalette.white};
`

const Btn = styled.button`
  padding: 1rem 2rem;
  font-family: ${fontStack.titles};
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid ${colorPalette.white};
  background: ${colorPalette.orange};
  color: ${colorPalette.white}
`

const ContentWrapper = styled.div`
  padding: 1.5rem;
  margin-top: 1rem;
  background: ${colorPalette.white};
  color: ${colorPalette.black};
  border-radius: 0.5rem;
`

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ReviewDropDown = ({reviews, btntext}:{reviews:ReviewInterface[], btntext:string}) => {
    const idAttr = useId();
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <DropDownWrapper>
      <Btn type="button" aria-controls={idAttr} aria-expanded={isExpanded}>{ btntext }</Btn>
      <ContentWrapper id={idAttr}>
        <ListWrapper>
          {
            reviews.map( (review, i) => (
              <li key={i+Date.now()}>
                
              </li>
            ))
          }
        </ListWrapper>
      </ContentWrapper>
    </DropDownWrapper>
  )
}
