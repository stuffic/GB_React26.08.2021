import React from 'react';
import '../App.css';

export const MessageText = ({SomeText}) => {
    return (        
        <div className="My-style-div">
            <h3 className="My-style">Made new App with React by {SomeText}</h3>
        </div>
    )
}
