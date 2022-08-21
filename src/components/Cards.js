import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Foods!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/burger.jpg'
              text='Winner winner burger dinner.'
              label='Burger'
              path='/services'
            />
            <CardItem
              src='images/pizza.jpg'
              text='The party cant start without pizza'
              label='Pizza'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/nonveg.jpg'
              text='Its finger lickin good.'
              label='Non-Veg'
              path='/services'
            />
            <CardItem
              src='images/paneer.jpg'
              text='You know when its real.'
              label='Veg'
              path='/products'
            />
            <CardItem
              src='images/thali.jpg'
              text='Take a bite out of hunger.'
              label='Thali'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
