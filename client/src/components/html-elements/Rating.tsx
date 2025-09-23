import { Star } from 'lucide-react';
import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';
import { fontStack } from '../../styles/fontStack';

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
    font-size: 1rem;
    line-height: 1.5;
    
`

export const Rating = ({rating, reviews}:{rating:number, reviews:number}) => {
   const rate = Math.round(rating);
   return (
        <StarWrapper>
            <StarInnerWrapper>
                {Array.from({length: rate }).map((_, i) => (
                    <Star key={Date.now()+i} color={colorPalette.white} strokeWidth={2} />
                ))}
            </StarInnerWrapper>
            <RatingText> <span className='sr-only'>Reviews</span>{ rating  } of 5 from { reviews  } reviews</RatingText>
        </StarWrapper>
   );
}
