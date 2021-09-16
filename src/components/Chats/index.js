import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Redirect } from 'react-router';

import { MessageText } from '../Message';
import { ChatList } from '../ChatList';
import { Form } from '../Form';

const answers = ["Я бот",
    "Как дела?",
    "Я ничего не умею",
    "Мне скучно. Поговори со мной",
    "Hello world",
    "My name is Bot"]


function Chats(props) {

    const { chatId } = useParams();

    const initialMes = {
        "chat-1": [{ text: "nnnn", author: "HUMAN", id: "mess-1" }],
        "chat-2": [],
        "chat-3": [],
    };

    const initialChats = [
        { name: "Bot", id: 1 },
        { name: "Best friend", id: 2 },
        { name: "New friend", id: 3 }
    ];

    console.log(initialChats);
    const [arrMessages, setArrMessages] = useState(initialMes);
    console.log(initialMes);
    const [chats, setChats] = useState(initialChats);
    

    const sendMessage = useCallback(
        (message) => {
            setArrMessages((prevMess) => ({
                ...prevMess,
                [chatId]: [...prevMess[chatId], message],
            }));
        },
        [chatId]
    );
    useEffect(() => {
        let timeout;

        if (!!chatId && arrMessages[chatId]!==undefined && arrMessages[chatId][arrMessages[chatId].length - 1]?.author === "I") {
            timeout = setTimeout(() => {
                sendMessage({
                    text: answers[Math.floor(answers.length * Math.random())],
                    author: "bot",
                    id: `mess-${Date.now()}`,
                });
            }, 1500);

        }

        return () => clearTimeout(timeout);
    }, [arrMessages]);

    const handleAddMessage = useCallback(
        (text) => {
            sendMessage({
                text,
                author: "I",
                id: `mess-${Date.now()}`,
            });
            console.log(text);
        },
        [chatId, sendMessage]
    );


    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        chatSection: {
            width: '100%',
            height: '80vh'
        },

        borderRight500: {
            borderRight: '1px solid #e0e0e0'
        },
        messageArea: {
            height: '70vh',
            overflowY: 'auto'
        }
    });

    console.log(chatId !== undefined);
    console.log(arrMessages[chatId] === undefined);

    if (chatId !== undefined && arrMessages[chatId] === undefined) {
        console.log(chats);
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
                            <ChatList chats={chats} />
                        </Grid>
                        <Grid item xs={9}>
                            <List className={useStyles.messageArea} key={"list-mess"}>
                               
                                {!!chatId &&(
                                    <>
                                        {arrMessages[chatId].map((message) => <ListItem key={`list-item-${message.id}`}> <MessageText key={message.id} someText={message.text} id={message.id} /></ListItem>)}
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
