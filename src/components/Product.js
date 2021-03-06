import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div>
      <p>{category}</p>

      <Image src={image} width={200} height={200} objectFit="contain" />

      <h3>{title}</h3>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>

      {hasPrime && <p>Has prime del</p>}
    </div>
  );
}

export default Product;
