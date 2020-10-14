import React from 'react';
import './container3.styles.css';
import { IconCard }  from '../icon-card/icon-card.component';
import ico1 from '../../photos/ic1-1.webp';
import ico2 from '../../photos/ic1-2.webp';
import ico3 from '../../photos/ic1-3.webp';
import ico4 from '../../photos/ic1-4.webp';
export const Container3 = () => {
    return (
        <div className="con3">
            <div className="icon-list">
                <IconCard text="Happy Clients" logo ={ico1} count="623,744"/>
                <IconCard text="Amazing Tours" logo ={ico2} count="112"/>
                <IconCard text="Partners" logo ={ico3} count="594"/>
                <IconCard text="Questions Answered" logo ={ico4} count="8,711"/>
            </div>
            <div className="con3-bg">
                <h2>Fastest Way to Compare and Book<br/> over 450 Cheap Flights</h2>
                <div className="btn1">
                <button>FIND YOUR FLIGHT</button>
                    </div> 
            </div>
        </div>
    )
}
