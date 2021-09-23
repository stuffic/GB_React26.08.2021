import { useCallback } from 'react';
import { useParams, Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, Divider } from '@material-ui/core';

import { MessageText } from '../Message';
import { Form } from '../Form';
import { addMessageWithReply } from '../../store/messages/actions';
import { AUTHORS, useStyles } from '../../utils/constants';
import { ChatListContainer } from '../ChatList/ChatListContainer';


function Chats(props) {

    const { chatId } = useParams();

    const dispatch = useDispatch();
    const arrMessages = useSelector(state => state.messages.messages);
    const chats = useSelector(state => state.chats.chats);

    const sendMessage = useCallback(
        (text, author) => {
            dispatch(addMessageWithReply(chatId, text, author))
        },
        [chatId, dispatch]
    );

    const handleAddMessage = useCallback(
        (text) => {
            sendMessage(text, AUTHORS.HUMAN);
        },
        [sendMessage]
    );

    if (chats.find((chat) => chat.id === chatId) === undefined) {
        return <Redirect to="/nochat" />;
    }

    return (
        <div className="App">
            <div>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="h5">Чат</Typography>
                    </Grid>
                </Grid>
                <div >
                    <Grid container component={Paper} className={useStyles.chatSection}>
                        <Grid item xs={3} className={useStyles.borderRight500}>
                            <ChatListContainer />
                        </Grid>
                        <Grid item xs={9}>
                            <List className={useStyles.messageArea} key={"list-mess"}>
                                {!!chatId && (
                                    <>
                                        {(arrMessages[chatId] || []).map((message) => <ListItem key={`list-item-${message.id}`}> <MessageText key={message.id} someText={message.text} id={message.id} /></ListItem>)}
                                    </>
                                )}
                            </List>
                            <Divider />
                            <Form onSubmit={handleAddMessage}></Form>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div >
    );
}

export default Chats;
