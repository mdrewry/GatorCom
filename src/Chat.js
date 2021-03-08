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
  setUserLang,
  userChat,
  setUserChat,
  otherChat,
  setOtherChat,
  otherLang,
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
    setUserChat([...userChat, userInput]);
    setOtherChat([...otherChat, translation.data[0].translations[0].text]);
  };
  return (
    <Grid className="chatWrapper" item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className="chatPaper">
        <div className="chat">
          {userChat.map((text, index) => (
            <div className="chatMessage" key={index}>
              <Typography>{text}</Typography>
            </div>
          ))}
        </div>
        <div className="row">
          <TextField
            placeholder="Say Something!"
            value={userInput}
            onChange={handleInput}
            fullWidth={true}
          />
          <Button onClick={handleTranslate}>Translate</Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default Chat;
