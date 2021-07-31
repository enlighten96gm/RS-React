import React from 'react';
import '../style/style.css';
import css from './single.module.css';

const SingleCard = ({ item }: any) => (
  <div className={css.single}>
    Card
    {item}
  </div>
);
export default SingleCard;
