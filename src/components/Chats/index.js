import { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, Divider } from '@material-ui/core';

import { MessageText } from '../Message';
import { ChatList } from '../ChatList';
import { Form } from '../Form';
import { addChat, deleteChat } from '../../store/chats/actions';
import { addMessage } from '../../store/messages/actions';
import { AUTHORS, useStyles, answers } from '../../utils/constants';

function Chats(props) {

    const { chatId } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const arrMessages = useSelector(state => state.messages.messages);
    const chats = useSelector(state => state.chats.chats);

    const sendMessage = useCallback(
        (text, author) => {
            dispatch(addMessage(chatId, text, author))
        },
        [chatId]
    );

    useEffect(() => {
        let timeout;

        if (!!chatId && arrMessages[chatId] !== undefined && arrMessages[chatId][arrMessages[chatId].length - 1]?.author === "I") {
            timeout = setTimeout(() => {
                sendMessage(answers[Math.floor(answers.length * Math.random())], AUTHORS.BOT);
            }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [arrMessages]);

    const handleAddMessage = useCallback(
        (text) => {
            sendMessage(text, AUTHORS.HUMAN);
        },
        [sendMessage]
    );

    const handleAddChat = useCallback(
        (name) => {
            dispatch(addChat(name));
        }, [dispatch]
    );

    const handleDeleteChat = useCallback(
        (id) => {
            dispatch(deleteChat(id));
            if (chatId !== id) {
                return;
            }
            if (chats.length === 1) {
                history.push(`/chats/${chats[0].id}`);
            } else {
                history.push(`/chats`);
            }
        },
        [chatId, dispatch, chats, history]
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
                            <ChatList chats={chats} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} />
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
