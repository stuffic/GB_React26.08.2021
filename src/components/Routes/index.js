import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainPage } from "../MainPage";
import { NoChat } from "../NoChat";
import Chats from "../Chats";
import { Profile } from "../Profile";
import { Cats } from "../Cats";
import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";
import { login, signUp, signOut, auth } from "../../services/firebase";
import { onAuthStateChanged } from "@firebase/auth";

export const Routes = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const onsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return onsubscribe;
    }, []);

    const handleLogin = async (email, pass) => {
        try {
            await login(email, pass);
        } catch (e) {
            console.log(e);
        }        
    };

    const handleLogout = async () => {
        try {
            await signOut();            
        } catch (e) {
            console.log(e);
        }        
    };

    const handleSignUp = async (email, pass) => {
        try {
          await signUp(email, pass);          
        } catch (e) {
          console.log(e);
        }
      }

    return (
        <BrowserRouter>
        <Link to="/profile">Профиль</Link>
        <br></br>
        <Link to="/chats/chat-1">Список чатов</Link>
        <br></br>
        <Link to="/cats">Котики</Link>
            <Switch>
                <PublicRoute path="/login" exact auth = {authed}>
                    <MainPage onLogin = {handleLogin}/>
                </PublicRoute>
                <PublicRoute path="/signup" exact auth = {authed}>
                    <MainPage onSignUp = {handleSignUp}/>
                </PublicRoute>
                <PrivateRoute path="/chats/:chatId?" exact auth = {authed} component={Chats}>
                </PrivateRoute>
                <PrivateRoute path="/profile" exact auth = {authed}>
                    <Profile onLogout = {handleLogout}/>
                </PrivateRoute>
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