import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectChats } from "../../store/chats/selectors";
import { addChatFb } from "../../store/chats/actions";
import { ChatList } from "./ChatListView";

export const ChatListContainer = () => {

    export const chats = useSelector(selectChats);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleAddChat = (e) => {

        e.preventDefault();
        dispatch(addChatFb(value));
        setValue('');        
    }

    return (
        <ChatList value={value} chats={chats} onAdd={handleAddChat} onChange={handleChange} />
    );
};