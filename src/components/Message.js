import React from 'react';
import '../App.css';

export const MessageText = ({someText, id}) => {
   
    return (        
        <div>            
            <h3 className="message" >{someText}</h3>            
        </div>
    )
}
