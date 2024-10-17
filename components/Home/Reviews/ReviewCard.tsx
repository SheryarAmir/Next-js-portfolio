import Image from 'next/image';
import React from 'react'
// props types
type Props={
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
}
const ReviewCard = ({review}:Props) => {
    const {image,name , profession,rating, review:clientReviews}=review 
  return (
    <div className=' rounded-md overflow-hidden bg-[#140c1c] m-4'>
      <div className=' p-6 '>
        <Image src="/images/q.png" alt={name} width={50} height={50}  />
        <p className='text-white text-opacity-70'>{clientReviews}</p>
        <Image src="/images/q.png" alt={name} width={50} height={50} className='ml-auto'  />

      </div>

      <div className='px-6 py-3 mb-3 w-fit mx-auto flex items-center space-x-3 rounded-full bg-indigo-900 text-white font-bold'>
          <span className='text-yellow-400'>{'⭐'.repeat(rating)}</span>
          <span className='text-gray-400 ml-2'>{rating}/5</span>
        </div>

<div className='bg-gray-100 '>
<div className='p-6 flex items-center space-x-6 '>
    <div>
        <Image src={image} alt={name} width={60} height={40} className= 'rounded-full '/>
    </div>
    <div>
        <h1 className='text-lg font-bold '>{name}</h1>
        <p className='text-base text-gray-700'> {profession}</p>
    </div>
</div>
</div>
    </div>
  )
}

export default ReviewCard
