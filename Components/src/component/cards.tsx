import React from 'react';
import SingleCard from './singleCard';

const Cards = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const singleCard = arr.map((item: number) => <SingleCard item={item} />);
  return (
    <div className="grid">
      {singleCard}
    </div>
  );
};
export default Cards;
