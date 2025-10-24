import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';
import { fontStack } from '../../styles/fontStack';
import { memo } from 'react';
import { RatingStarSystem } from './RatingStarSystem';

const StarWrapper = styled.div`
    background-color: ${colorPalette.black};
    color: ${colorPalette.white};
    padding: 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const StarInnerWrapper = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;      
`
const RatingText = styled.p`
    font-family: ${fontStack.text};
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: right;    
`

const RatingElem = ({rating, reviews}:{rating:number, reviews:number}) => {
   const rate = Math.round(rating);
   return (
        <StarWrapper>
            <StarInnerWrapper>
                <RatingStarSystem rate={rate} />
            </StarInnerWrapper>
            <RatingText> <span className='sr-only'>Reviews</span>{ rating  } of 5 from { reviews  } reviews</RatingText>
        </StarWrapper>
   );
}

export const Rating = memo(RatingElem);