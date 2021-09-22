import { ADD_CHAT, DELETE_CHAT } from './actions';

const initialState = {
    chats: [{ name: "Bot", id: "chat-1" },],
}

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, { id: `chat-${Date.now()}`, name: payload }],
            };
        }
        case DELETE_CHAT: {
            const newChats = state.chats.filter(({ id }) => id !== payload);
            return {
                ...state,
                chats: newChats,
            };
        }
        default:
            return state;
    }
};