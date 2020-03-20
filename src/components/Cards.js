import React from 'react';

const Cards = (props) =>{
    return( 
    <div className='cards flex flex-wrap justify-center tc'>
    {props.robots.map((robot, i) =>(
        <div key={i} className='bg-light-blue ma3 br4 grow pointer'>
            <img src={ "https://robohash.org/" + robot.name} alt="robot"/>
            <h3>{robot.name}</h3>
        </div>
    ))}
    </div>)
}
export default Cards;