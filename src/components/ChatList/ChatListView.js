import React from "react";
import { List, Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/AddCircleOutline';

import { ChatItem } from "../ChatItem";

export const ChatList = ({ value, chats, onAdd, onChange }) => (
    <List>
        <form onSubmit={onAdd}>
            <input type="text" value={value} onChange={onChange} />
            <Button type="submit" disabled={!value} color="primary"><AddIcon />
            </Button>
        </form>
        {chats.map((chat) => (
            <ChatItem chat={chat} key={chat.id} >
            </ChatItem>))}
    </List>
);