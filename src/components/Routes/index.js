import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { MainPage } from "../MainPage";
import { NoChat } from "../NoChat";
import Chats from "../Chats";
import { Profile } from "../Profile";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/chats/:chatId?" component={Chats}>
                </Route>
                <Route path="/profile">
                    <Profile/>                    
                </Route>
                <Route path="/nochat">
                    <NoChat />
                </Route>
                <Route >
                    <h2>404</h2>
                </Route>

            </Switch>
        </BrowserRouter>
    )
};