import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";
import { DELETE_CHAT } from "../chats/actions";

const initialState = {
    messages: { "chat-1": [{ text: "nnnn", author: "HUMAN", id: "mess-1" }] },
};

export const messageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: [
                        ...state.messages[payload.chatId] || [],
                        {
                            id: `mess-${Date.now()}`,
                            text: payload.text,
                            author: payload.author,
                        },
                    ],
                },
            };
        }
        case DELETE_MESSAGE: {
            const newChatMessage = state.messages[payload.chatId].filter
                (({ id }) => id !== payload.id);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: newChatMessage,
                },
            };
        }
        case DELETE_CHAT: {
            const newMessages = { ...state.messages };
            delete state.messages[payload];
            return {
                ...state,
                messages: newMessages,
            };
        }
        default:
            return state;
    }
};