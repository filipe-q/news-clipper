import React from 'react';
import TinyLogo from '../TinyLogo/TinyLogo';

const NewsRoomTitle = ( props ) => {
    return (
        <h1>Welcome to the {<TinyLogo width="40px"/>} {props.companyTitle} News Room</h1>
    )
}

export default NewsRoomTitle;