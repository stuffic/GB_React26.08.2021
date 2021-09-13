import React, { useState, useRef, useCallback } from "react";
import { Button, TextField } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';

export const Form = ({ onSubmit }) => {
    const inputRef = useRef(null);

    const [value, setValue] = useState("");

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
        inputRef.current.focus();
    };

    console.log(inputRef);

    return (
        
            <Grid  style={{ padding: '20px' }} item xs={12}>
            <form  onSubmit={handleSubmit}>
                <div>
                <Grid item xs={12}>
                    <TextField label="Наберите ваше сообщение" fullWidth value={value} onChange={handleChange} inputRef={inputRef} />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="submit" color="primary"> <SendIcon />
                        {(text) => (
                            <>                                
                            </>
                        )}
                    </Button>
                    </Grid>
                </div>
            </form>
            </Grid>           
        
    );
};