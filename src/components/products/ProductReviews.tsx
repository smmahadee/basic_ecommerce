import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

export default function ProductReviews({ rating = 3.5 }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push('fill');
    } else if (rating > i) {
      stars.push('half');
    } else {
      stars.push('empty');
    }
  }

  return (
    <div className='flex items-center gap-1'>
      {stars.map((type, i) => (
        <Star key={i} type={type} />
      ))}
    </div>
  );
}

function Star({ type }: { type: string }) {
  return (
    <span className=''>
      {type === 'fill' && <BsStarFill className='text-yellow' />}
      {type === 'half' && <BsStarHalf className='text-yellow' />}
      {type === 'empty' && <BsStar className='text-yellow' />}
    </span>
  );
}
