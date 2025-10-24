import { Star } from 'lucide-react';
import { colorPalette } from '../../styles/colorPalette';
import { memo } from 'react';

const Stars = ({rate}:{rate:number}) => {
  return (
    <>
      {Array.from({ length: rate }).map((_, i) => (
        <Star size={16} key={i} color={colorPalette.white} strokeWidth={2} />
      ))}
    </>
  )
}
export const RatingStarSystem  = memo(Stars)
