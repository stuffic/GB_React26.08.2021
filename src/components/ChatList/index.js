import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, Avatar} from "@material-ui/core";


export const ChatList = ({chats}) => {return (
    <List>    
    {chats.map((chat) =>(                            
    <ListItem button key={chat.id}>                                
        <ListItemIcon>
            <Avatar alt="Bot" src="https://image.flaticon.com/icons/png/512/2301/2301361.png" />
        </ListItemIcon>
        <Link to={`/chats/chat-${chat.id}`}>{chat.name}</Link>
    </ListItem> ))}                                                            
    </List>
);
};