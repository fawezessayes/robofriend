// packages
import React from 'react';

// componets

//code
export default function Search({onSearch}){
    return(
        <section className="tc f3 mb4">
            <h1>Robofriends</h1>
            <input onChange={onSearch} className="br3 pa2 pl4 pr4 " type="text" placeholder='look for a robot'/>
        </section>
    )
}