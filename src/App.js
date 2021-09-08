import './App.css';
import { MessageText } from './components/Message';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { useRef } from 'react';


const answers = ["Я бот",
  "Как дела?",
  "Я ничего не умею",
  "Мне скучно. Поговори со мной",
  "Hello world",
  "My name is Bot"]

function App() {

  const inputRef = useRef(null);

  const chats = [{name: "Bot", id: 1}, {name:"Best friend", id:2}, {name:"New friend", id: 3}]

  const [arrMessages, setArrMessages] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (arrMessages[arrMessages.length - 1]?.author === "I") {
      setTimeout(() => setArrMessages((prevArrMessages) => [
        ...prevArrMessages,
        { text: answers[Math.floor(answers.length * Math.random())], author: "bot" },
      ]), 1500);
      inputRef.current.focus();
    }
  }, [arrMessages]);

  useEffect(() => inputRef.current && inputRef.current.focus());

  const handleAddMessage = () => {
    setArrMessages(arrMessages => [...arrMessages, { text: value, author: "I" }]);
    console.log(arrMessages);
    setValue("");    
  };
 

  const handleChange = (e) => {
    setValue(e.target.value);
  }

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
            <List>
                <ListItem button key={chats[0].id}>
                  <ListItemIcon>
                    <Avatar alt="Bot" src="https://image.flaticon.com/icons/png/512/2301/2301361.png" />
                  </ListItemIcon>
                  <ListItemText primary={chats[0].name}>{chats[0].id}</ListItemText>
                </ListItem>
                <ListItem button key={chats[1].id}>
                  <ListItemIcon>
                    <Avatar alt="Best friend" src="https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-cat-face-line-icon-vector-png-image_1874331.jpg" />
                  </ListItemIcon>
                  <ListItemText primary={chats[1].name}>{chats[1].id}</ListItemText>
                </ListItem>
                <ListItem button key={chats[2].id}>
                  <ListItemIcon>
                    <Avatar alt="New friend" src="https://cdn-icons-png.flaticon.com/512/194/194279.png" />
                  </ListItemIcon>
                  <ListItemText primary={chats[2].name}>{chats[2].name}</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={9}>
              <List className={useStyles.messageArea} key = {"list-mess"}>                              
              {arrMessages.map((message, i) =><ListItem key = {`list-item-${i}`}> <MessageText someText={message.text} key = {`mess-${i}`}></MessageText></ListItem>)}
              </List>
              <Divider />
              <Grid container style={{ padding: '20px' }}>
                <Grid item xs={11}>
                  <TextField label="Наберите ваше сообщение" fullWidth value={value} onChange={handleChange} inputRef = {inputRef}/>
                </Grid>
                <Grid xs={1} align="right">
                  <Fab color="primary" onClick={handleAddMessage}><SendIcon /></Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>              
          
        </div>
      </div>
    </div>
  );
}

export default App;
