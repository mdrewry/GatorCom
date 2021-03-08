import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

function App() {
  const [userOneInput, setUserOneInput] = useState("hello");
  const [userTwoInput, setUserTwoInput] = useState("");
  const [userOneChat, setUserOneChat] = useState([]);
  const [userTwoChat, setUserTwoChat] = useState([]);
  const [userOneLang, setUserOneLang] = useState("en");
  const [userTwoLang, setUserTwoLang] = useState("de");
  const title = "GatorCom";
  return (
    <div className="app">
      <AppBar className="padding10" position="sticky" variant="outlined">
        <Typography className="appTitle">{title}</Typography>
      </AppBar>
      <Grid className="chatGridWrapper" container spacing={0}>
        <Chat
          userInput={userOneInput}
          setUserInput={setUserOneInput}
          userLang={userOneLang}
          setUserLang={setUserOneLang}
          userChat={userOneChat}
          setUserChat={setUserOneChat}
          otherChat={userTwoChat}
          setOtherChat={setUserTwoChat}
          otherLang={userTwoLang}
        />
        <Chat
          userInput={userTwoInput}
          setUserInput={setUserTwoInput}
          userLang={userTwoLang}
          setUserLang={setUserTwoLang}
          userChat={userTwoChat}
          setUserChat={setUserTwoChat}
          otherChat={userOneChat}
          setOtherChat={setUserOneChat}
          otherLang={userOneLang}
        />
      </Grid>
    </div>
  );
}

export default App;
