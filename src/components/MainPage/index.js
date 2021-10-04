import React, { useState } from "react";

export const MainPage = ({onLogin, onSignUp}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');  
    
    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin('');
        setPassword('');
        if (!!onLogin)
        {
            onLogin(login, password);
        }
        else {
            onSignUp(login, password);
        }
    }

    return <div>
        <h4> {!!onLogin ? 'Login' : 'SignUp'} </h4>        
        <form onSubmit={handleSubmit}>
            <input type = "text" value = {login} onChange={handleLoginChange} />
            <input type = "password" value = {password} onChange={handlePassChange}/>
            <input type = "submit"/>
        </form>
    </div>
}