import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { functions } from "./firebase";
import Message from "./Message";
function Chat({
  userInput,
  setUserInput,
  userLang,
  userChat,
  setUserChat,
  otherChat,
  setOtherChat,
  otherLang,
  user,
  userName,
  labels,
}) {
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleTranslate = async () => {
    const translate = functions.httpsCallable("translate");
    const translation = await translate({
      query: userInput,
      langFrom: userLang,
      langTo: otherLang,
    });
    setUserInput("");
    setUserChat([...userChat, { text: userInput, person: user, rating: "✔" }]);
    setOtherChat([
      ...otherChat,
      {
        text: translation.data[0].translations[0].text,
        person: user,
        rating: "✔",
      },
    ]);
  };
  return (
    <Grid className="chatWrapper" item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className="chatPaper">
        <div className="chatHeader">
          <Typography className="chatNameText">{userName}</Typography>
          <div className="grow" />
          <Paper className="chatLangHighlight">
            <Typography className="chatLangText">{userLang}</Typography>
          </Paper>
        </div>
        <div className="chat">
          {userChat.map((message, index) => (
            <Message
              userChat={userChat}
              setUserChat={setUserChat}
              otherChat={otherChat}
              setOtherChat={setOtherChat}
              user={user}
              labels={labels}
              message={message}
              index={index}
              key={index}
            />
          ))}
        </div>
        <div className="row">
          <TextField
            placeholder={labels.placeholder}
            value={userInput}
            onChange={handleInput}
            fullWidth={true}
          />
          <Button className="chatButton" onClick={handleTranslate}>
            {labels.button}
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default Chat;
