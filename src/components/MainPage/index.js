import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
    return <div>
        <h4> Это главная страница </h4>
        <Link to="/profile">Профиль</Link>
        <br></br>
        <Link to="/chats/chat-1">Список чатов</Link>
    </div>
}