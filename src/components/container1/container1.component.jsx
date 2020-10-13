import React from 'react'
import './component1.styles.css'
export  const Container1=()=> {
    return (
        <div className=" con1 ">
            <h1>Enjoy Your Dream Vacation</h1>
            <p>Travel to the any corner of the world, without going around in circles.</p>
            <div className="input-search">
            <input type="text" placeholder="Enter Keyword" />
            <button >SEARCH</button>
            </div>
        </div>
    )
}