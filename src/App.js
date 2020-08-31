import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  //useState is dynamic variable in react.
  //useEffect is used to run a code on a condition in react.
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    //run once when the app component loads.
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //write and run code here.
    //if it's blank inside [], this code runs ONCE when the app component loads.
    //if we have a variable like 'input', it runs every time input changes.

    //const user = prompt('something')...
    setUsername(prompt("Please Enter Your Name"));
  }, []); //condition

  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // //all logics
    // setMessages([...messages, { username: username, message: input }]);
    // //clear the inputfiled
    setInput("");
  };
  return (
    <div className="App">
      <h1>Messenger by Soumyadeep!</h1>
      <h2>{`Welcome ${username}`}</h2>

      {/* Input Field */}
      {/* Button */}
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Happy Messaging...</InputLabel>
          <Input
          className="app__input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
          className="app__iconButton"
            variant="contained"
            color="secondary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          {/* <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            Send Message
          </Button> */}
        </FormControl>
      </form>

      {/* Messages */}

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
          // <p>{message}</p>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
