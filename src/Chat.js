import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { functions } from "./firebase";
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
    setUserChat([...userChat, { text: userInput, person: user }]);
    setOtherChat([
      ...otherChat,
      { text: translation.data[0].translations[0].text, person: user },
    ]);
  };
  return (
    <Grid className="chatWrapper" item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className="chatPaper">
        <div className="row">
          <Typography>{userName}</Typography>
          <div className="grow" />
          <Typography>{userLang}</Typography>
        </div>
        <div className="chat">
          {userChat.map((message, index) => (
            <Paper className="chatMessage" key={index}>
              {message.person === "one" && <div className="grow" />}
              <Typography>{message.text}</Typography>
              {message.person === "two" && <div className="grow" />}
            </Paper>
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
