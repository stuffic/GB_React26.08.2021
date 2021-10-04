import { onValue, ref, set } from "@firebase/database";
import { auth, db } from "../../services/firebase";
import { AUTHORS, answers } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGES';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGES';
export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        text,
        author,
    },
});

export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        id,
    },
});

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});

let timeout;
export const addMessageWithReply = (chatId, text, author) => (dispatch) => {
    dispatch(addMessage(chatId, text, author));

    if (author === AUTHORS.HUMAN) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            dispatch(addMessage(chatId, answers[Math.floor(answers.length * Math.random())], AUTHORS.BOT));
        }, 1000);
    }
};

export const initMessages = () => (dispatch) => {
    const messageDbRef = ref(db, 'messages');
    onValue(messageDbRef, (snapshot) => {
        const data = snapshot.val();        
        dispatch(setMessages(data || {}));
    });
}

export const addMessageFb = (text, author, chatId) => (dispatch) => {
    let newId = `message-${Date.now()}`;
    const messageDbRef = ref(db, `messages/${chatId}/${newId}`);
    set(messageDbRef, {
        author,
        text,
        id: newId,
    });
    if (author === AUTHORS.HUMAN) {
        newId = `message-${Date.now()}`;
        const messageAnsDbRef = ref(db, `messages/${chatId}/${newId}`);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            set(messageAnsDbRef, {
                author: AUTHORS.BOT,
                text : answers[Math.floor(answers.length * Math.random())],
                id: newId,
            }); 
        }, 3000);
    }
}

