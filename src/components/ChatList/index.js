import React, { useState } from "react";
import { List, Button } from "@material-ui/core";

import AddIcon from '@material-ui/icons/AddCircleOutline';

import { ChatItem } from "../ChatItem";

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);
        setValue('');
    }

    return (
        <List>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <Button type="submit" disabled={!value} color="primary"><AddIcon />
                </Button>
            </form>
            {chats.map((chat) => (
                <ChatItem chat={chat} key={chat.id} id={chat.id} onDelete={onDeleteChat}>
                </ChatItem>))}
        </List>
    );
};