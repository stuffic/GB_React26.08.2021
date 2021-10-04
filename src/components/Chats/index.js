import { useCallback } from 'react';
import { useParams} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, Divider } from '@material-ui/core';
import { useMemo } from 'react';

import { MessageText } from '../Message';
import { Form } from '../Form';
import { addMessageFb, initMessages } from '../../store/messages/actions';
import { AUTHORS, useStyles } from '../../utils/constants';
import { ChatListContainer } from '../ChatList/ChatListContainer';
import { initChats } from '../../store/chats/actions';
import { selectIfChatExists } from '../../store/chats/selectors';


function Chats(props) {

    const { chatId } = useParams();
    const dispatch = useDispatch();
   
    const messages = useSelector(state => state.messages.messages);
    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
    const chatExists = useSelector(selectChatExists);

    useEffect(() => {
        dispatch(initChats());
        dispatch(initMessages());
      }, []);

    const sendMessage = useCallback(
        (text, author) => {            
            dispatch(addMessageFb(text, author, chatId))
        },
        [chatId]
    );

    const handleAddMessage = useCallback(
        (text) => {
            sendMessage(text, AUTHORS.HUMAN);            
        },
        [sendMessage]
    );    

    console.log(messages);
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
                                {!!chatId &&  chatExists && (
                                    <>
                                        {(Object.values(messages[chatId]|| {} )|| {}).map((message) => <ListItem key={`list-item-${message.id}`}> <MessageText key={message.id} someText={message.text} id={message.id} /></ListItem>)}
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
