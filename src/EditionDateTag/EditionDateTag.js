import React from 'react';
import Moment from "react-moment";
import moment from 'moment';

const EditionDateTag = ( props ) => {
    const agoDate = ( props ) => {
        return <Moment fromNow>{ props.editionDate }</Moment>;
    }
    
    const absoluteDate = ( props ) => {
        return moment(props.editionDate).format("MMMM Do YYYY, h:mm:ss a")
    }

    return <span title={absoluteDate( props )} >{ agoDate( props ) }</span>
}

export default EditionDateTag;