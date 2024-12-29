import React from 'react'
import { MdOutlineStarOutline, MdStar, MdStarHalf } from "react-icons/md";
const RenderStar = (rate) => {
    const fullStars = Math.floor(rate); 
    const hasHalfStar = rate % 1 !== 0;  
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
  return (
    <>
    {[...Array(fullStars)].map((_, index) => (
      <MdStar key={`full-${index}`} className="text-yellow-500" />
    ))}
    {hasHalfStar && <MdStarHalf className="text-yellow-500" />}
    {[...Array(emptyStars)].map((_, index) => (
      <MdOutlineStarOutline key={`empty-${index}`} className="text-gray-400" />
    ))}
  </>
  )
}

export default RenderStar