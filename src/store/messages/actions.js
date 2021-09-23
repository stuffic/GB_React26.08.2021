import { AUTHORS, answers } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGES';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGES';


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