import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ListItem, ListItemIcon, Avatar, Button, Grid } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/HighlightOff';

import { selectChatsLength, selectFirstChatId } from "../../store/chats/selectors";
import { deleteChat } from "../../store/chats/actions";

export const ChatItem = ({ chat }) => {

    const history = useHistory();
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const chatsLength = useSelector(selectChatsLength);
    const firstChatId = useSelector(selectFirstChatId)

    const handleDelete = () => {
        dispatch(deleteChat(chat.id));
        if (chatId !== chat.id) {
            return;
        }
        if (chatsLength === 1) {
            history.push(`/nochat`);
        } else {
            history.push(`/chats/${firstChatId}`);
        }
    }

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