import React from 'react';

import './KeepInTouchLink.css';

const keepInTouchLink = (props) => (
    <li className='keep-in-touch-link'>
        <a href={props.href} target="_blank">
            <img src={props.img} alt={props.alt} />
            <span>{props.text}</span>
        </a>
    </li>
);

export default keepInTouchLink;