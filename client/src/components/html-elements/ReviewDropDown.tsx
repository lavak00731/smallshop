import { useId, useState, type MouseEventHandler, type ReactEventHandler } from "react";
import styled from "styled-components";
import { RatingStarSystem } from "./RatingStarSystem";
import { type ReviewInterface } from "../../types/ReviewInterface";
import { colorPalette } from "../../styles/colorPalette";
import { fontStack } from "../../styles/fontStack";

const DropDownWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${colorPalette.decorative};
  color: ${colorPalette.white};
  text-align: center;
`

const Btn = styled.button`
  padding: 1rem 2rem;
  font-family: ${fontStack.titles};
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid ${colorPalette.white};
  background: ${colorPalette.orange};
  color: ${colorPalette.white};
  border-radius: 0.25rem;
`

const ContentWrapper = styled.div`
  margin-top: 1rem;
  background: ${colorPalette.black};
  color: ${colorPalette.white};
  border-radius: 0.5rem;
  &.hidden  {
    display: none;
  }
`

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`

const ReviewText = styled.span`
  font-family: ${fontStack.text};
  line-height: 1.5;
  font-weight: 600;
  text-align: right;
`

const StarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const ReviewWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
  gap: 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${colorPalette.decorative};
    padding-bottom: 1rem;
  }
`

export const ReviewDropDown = ({reviews, btntext}:{reviews:ReviewInterface[], btntext:string}) => {
    const idAttr = useId();
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  return (
    <DropDownWrapper>
      <Btn onClick={handleClick} type="button" aria-controls={idAttr} aria-expanded={isExpanded}>{ btntext }</Btn>
      <ContentWrapper id={idAttr} className={!isExpanded ? "hidden" : ""}>
        <ListWrapper>
          {
            reviews.map( (review, i) => (
              <ReviewWrapper key={i+Date.now()}>
                <StarsWrapper>
                  <RatingStarSystem rate={Math.round(review.rating)} />
                </StarsWrapper>                
                <ReviewText>{review.comment}</ReviewText>
              </ReviewWrapper>
            ))
          }
        </ListWrapper>
      </ContentWrapper>
    </DropDownWrapper>
  )
}
