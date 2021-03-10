import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    setUserChat([...userChat, { text: userInput, person: user, rating: "-1" }]);
    setOtherChat([
      ...otherChat,
      {
        text: translation.data[0].translations[0].text,
        person: user,
        rating: "-1",
      },
    ]);
  };
  const handleRatingChange = (e, index) => {
    let tempChat = userChat;
    tempChat[index].rating = e.target.value;
    setUserChat([...tempChat]);
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
            <Accordion
              disabled={user === message.person}
              style={{ backgroundColor: "white", color: "black" }}
              className="margin10Top"
              key={index}
            >
              <AccordionSummary
                className="chatMessageOther"
                style={{ color: "black", opacity: 1 }}
                expandIcon={
                  <ExpandMoreIcon
                    style={{ opacity: user === message.person ? 0 : 1 }}
                  />
                }
              >
                {message.person === user && <div className="grow" />}
                <Typography>{message.text}</Typography>
              </AccordionSummary>
              <AccordionDetails className="rowCenter">
                <Typography>{labels.ratingHeader}</Typography>
                <div className="grow" />
                <FormControl>
                  <RadioGroup
                    value={message.rating}
                    onChange={(e) => handleRatingChange(e, index)}
                    row
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      labelPlacement="bottom"
                      label={labels.ratingOne}
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      labelPlacement="bottom"
                      label={labels.ratingTwo}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      labelPlacement="bottom"
                      label={labels.ratingThree}
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
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
