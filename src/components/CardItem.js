import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const style = {
    backgroundImage: `url(${props.src})`,
  };

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <div className='cards__item__pic-wrap' style={style} data-category={props.label} />
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
