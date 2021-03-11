import React, { Fragment } from "react";
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
function Chat({
  userChat,
  setUserChat,
  otherChat,
  setOtherChat,
  user,
  labels,
  message,
  index,
}) {
  const handleRatingChange = (e, index) => {
    let tempUserChat = userChat;
    let tempOtherChat = otherChat;
    tempUserChat[index].rating = e.target.value;
    tempOtherChat[index].rating = e.target.value;
    setUserChat([...tempUserChat]);
    setOtherChat([...tempOtherChat]);
  };
  return (
    <Accordion
      disabled={user === message.person}
      style={{ backgroundColor: "white", color: "black" }}
      className="margin10Top"
      key={index}
    >
      <AccordionSummary
        className="chatMessage"
        style={{ color: "black", opacity: 1 }}
        expandIcon={
          <ExpandMoreIcon
            style={{ opacity: user === message.person ? 0 : 1 }}
          />
        }
      >
        {message.person === user && (
          <Fragment>
            <Paper
              className="chatMessageRating"
              style={{
                backgroundColor: message.rating === "✔" ? "#00B300" : "#E20000",
              }}
            >
              <Typography
                className="chatLangText"
                style={{ marginLeft: message.rating === "✔" ? "-7px" : "0px" }}
              >
                {message.rating}
              </Typography>
            </Paper>
            <div className="grow" />
          </Fragment>
        )}
        <Typography
          style={{ marginTop: message.person === user ? "3px" : "0px" }}
        >
          {message.text}
        </Typography>
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
              value="✔"
              control={<Radio color="primary" />}
              labelPlacement="bottom"
              label={labels.ratingOne}
            />
            <FormControlLabel
              value="⁉"
              control={<Radio color="primary" />}
              labelPlacement="bottom"
              label={labels.ratingTwo}
            />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}

export default Chat;
