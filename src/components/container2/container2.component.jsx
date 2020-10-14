import React from 'react';
import './container2.styles.css';
import {Card } from '../card/card.component'
import volume from '../../photos/volume.svg'

import diamond from '../../photos/diamond.svg';
import medal from '../../photos/medal.svg';
import customer from '../../photos/customer.svg';
import thumb from '../../photos/thumb-up.svg';
import price from '../../photos/best-price.svg';
export const Container2 = () => {
  return (
    <div className="con2">
      <h2>Why Travellino</h2>
      <div className="card-list">
          <Card logo={volume} text="With Travellino, you’ll find a perfect destination among hundreds available." head="WIDE VARIETY OF DESTINATIONS"/>
          <Card logo={medal} text="We pick the hotels with the utmost reputation and positive reviews." head="HANDPICKED HOTELS"/>
          <Card logo={thumb} text="Our high level of service is officially recognized by thousands of clients." head="HIGHLY QUALIFIED SERVICE"/>
          <Card logo={customer} text="Our travel agents are always there to support you during your trip." head="24/7 SUPPORT"/>
          <Card logo={diamond} text="We pick the hotels with the utmost reputation and positive reviews." head="HANDPICKED HOTELS"/>
          <Card logo={price} text="We guarantee you’ll get top-notch comfort at an affordable price." head="BEST PRICE GUARANTEE"/>
          

      </div>
    </div>
  );
};
