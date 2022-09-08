import React from 'react';
import avatar from '../images/avatar.jpg';

export default function Header(){
    return <div className='header'>
        <img src={avatar} alt="woman looking at camera"></img>
        <h1>Hadija Ahmatović</h1>
        <h2>Web Developer</h2>
        <h4><a href="mailto: hadija.ahmatovic@gmail.com">Send me an email</a></h4>
    </div>
}