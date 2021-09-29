import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainPage } from "../MainPage";
import { NoChat } from "../NoChat";
import Chats from "../Chats";
import { Profile } from "../Profile";
import { Cats } from "../Cats";

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
                    <Profile />
                </Route>
                <Route path="/cats">
                    <Cats />
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