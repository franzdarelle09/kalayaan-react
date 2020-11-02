import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Experiences!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/kalayaan_falls.jpg'
              text='Explore our alluring Twin Falls'
              label='Tourist Spot'
              path='/services'
            />
            <CardItem
              src='images/longos-church.jpg'
              text='Visit our beautiful churches'
              label='Church'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/laguna-de-bay.jpg'
              text='Set Sail in the Laguna De Bay'
              label='Travel'
              path='/services'
            />
            <CardItem
              src='images/rural.jpeg'
              text='Experience rural life'
              label='Culture'
              path='/products'
            />
            <CardItem
              src='images/food.jpg'
              text='Savor our delicacies'
              label='Food'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
