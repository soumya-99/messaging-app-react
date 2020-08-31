import React, { forwardRef } from "react";
import { Typography, CardContent, Card } from "@material-ui/core";
import "./Message.css";

//Message is a variable function
//forwardRef() is a higher order function. It wraps all the Message (var func.) inside of it. 1:50:00

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || 'Unknown User'}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
