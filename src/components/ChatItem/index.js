import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, Avatar, Button, Grid } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/HighlightOff';

export const ChatItem = ({ chat, onDelete, id }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <Grid item xs={12} >
            <ListItem key={chat.id} id={chat.id} >
                <ListItemIcon>
                    <Avatar alt="Bot" src="https://image.flaticon.com/icons/png/512/2301/2301361.png" />
                </ListItemIcon>
                <Link to={`/chats/${chat.id}`}>{chat.name}  </Link>
                <Button onClick={handleDelete} color="primary" align="right"> <DeleteIcon />
                </Button>
            </ListItem>
        </Grid>

    );
};