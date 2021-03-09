import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
function SurveyForm({
  labels,
  setPage,
  setUserOneInput,
  setUserTwoInput,
  setUserOneChat,
  setUserTwoChat,
  setUserOneName,
  setUserTwoName,
  setUserOneLang,
  setUserTwoLang,
  setSurveyLabels,
  setUserOneLabels,
  setUserTwoLabels,
  setSessionEndButtonLabel,
}) {
  const handleClick = () => {
    setUserOneInput("");
    setUserTwoInput("");
    setUserOneChat([]);
    setUserTwoChat([]);
    setUserOneName("");
    setUserTwoName("");
    setUserOneLang("");
    setUserTwoLang("");
    setSurveyLabels({
      header: {
        langOne: "Thanks for using the app!",
        langTwo: "Thanks for using the app!",
      },
      button: { langOne: "Send Feedback", langTwo: "Send Feedback" },
    });
    setUserOneLabels({
      button: "Translate",
      autocomplete: "Say Something",
    });
    setUserTwoLabels({
      button: "Translate",
      autocomplete: "Say Something",
    });
    setSessionEndButtonLabel({
      langOne: "End Chat",
      langTwo: "End Chat",
    });
    setPage(0);
  };
  return (
    <Grid className="landingWrapper" item xs={12}>
      <Typography className="landingTitle">
        {labels.header.langOne}
        <br />
        {labels.header.langTwo}
      </Typography>
      <a href="https://elearning.ufl.edu/supported-services/qualtrics/">
        <Button
          variant="contained"
          className="visitSurveyButton"
          onClick={handleClick}
        >
          {labels.button.langOne}
          <br />
          {labels.button.langTwo}
        </Button>
      </a>
    </Grid>
  );
}

export default SurveyForm;
