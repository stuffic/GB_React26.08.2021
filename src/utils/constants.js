import { makeStyles } from '@material-ui/core/styles';

export const AUTHORS = {
    HUMAN: "I",
    BOT: "bot"
};

export const answers = ["Я бот",
    "Как дела?",
    "Я ничего не умею",
    "Мне скучно. Поговори со мной",
    "Hello world",
    "My name is Bot"]


export const useStyles = makeStyles({
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
    },
    chatArea: {
        justifyContent: 'center',
    }
});
