import React, { useState } from 'react';
import style from './Carousel.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel() {
  let items = [1, 2, 3, 4];
  const [x, setX] = useState(0);

  const slideLeft = () => {
    x > 0 ? setX(x - 100) : setX((items.length - 1) * 100);
  }

  const slideRight = () => {
    x === (items.length - 1) * 100 ? setX(0) : setX(x + 100);
  }

  return <div className = { style.carousel }>
    { items.map((item, index) => <div key = { index } style = {{ transform: `translateX(-${x}%)` }}>{ item }</div>) }
    <button onClick = { slideLeft }><FaChevronLeft/></button>
    <button onClick = { slideRight }><FaChevronRight/></button>
  </div>;
}
