import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Loader from "react-loader-spinner";
import { functions } from "./firebase";
import UserInitForm from "./UserInitForm";
function Landing({
  userOneName,
  setUserOneName,
  userTwoName,
  setUserTwoName,
  userOneLang,
  setUserOneLang,
  userTwoLang,
  setUserTwoLang,
  handleNextPage,
  setSurveyLabels,
  setUserOneLabels,
  setUserTwoLabels,
  setSessionEndButtonLabel,
}) {
  const [loading, setLoading] = useState(false);
  const getTranslation = async (query) => {
    const translate = functions.httpsCallable("translateLabels");
    const translation = await translate({
      query,
      langOne: userOneLang,
      langTwo: userTwoLang,
    });
    return translation.data[0].translations;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const surveyHeader = await getTranslation("Thanks for using the app!");
    const surveyButton = await getTranslation("Send Feedback");
    const userButtons = await getTranslation("Translate");
    const userAutoCompletes = await getTranslation("Say Something");
    const sessionEndButton = await getTranslation("End Session");
    const ratingLabelOne = await getTranslation("Great");
    const ratingLabelTwo = await getTranslation("Okay");
    const ratingLabelThree = await getTranslation("Bad");
    const ratingLabelHeader = await getTranslation(
      "How accurate was the translation?"
    );
    setSurveyLabels({
      header: { langOne: surveyHeader[0].text, langTwo: surveyHeader[1].text },
      button: { langOne: surveyButton[0].text, langTwo: surveyButton[1].text },
    });
    setUserOneLabels({
      button: userButtons[0].text,
      autocomplete: userAutoCompletes[0].text,
      ratingHeader: ratingLabelHeader[0].text,
      ratingOne: ratingLabelOne[0].text,
      ratingTwo: ratingLabelTwo[0].text,
      ratingThree: ratingLabelThree[0].text,
    });
    setUserTwoLabels({
      button: userButtons[1].text,
      autocomplete: userAutoCompletes[1].text,
      ratingHeader: ratingLabelHeader[1].text,
      ratingOne: ratingLabelOne[1].text,
      ratingTwo: ratingLabelTwo[1].text,
      ratingThree: ratingLabelThree[1].text,
    });
    setSessionEndButtonLabel({
      langOne: sessionEndButton[0].text,
      langTwo: sessionEndButton[1].text,
    });
    setLoading(false);
    handleNextPage();
  };
  return (
    <Grid className="landingWrapper" item xs={12}>
      <Typography className="landingTitle">Welcome to GatorCom</Typography>
      <Paper className="landingPaper">
        <form className="landingForm" onSubmit={handleSubmit}>
          <UserInitForm
            userName={userOneName}
            setUserName={setUserOneName}
            lang={userOneLang}
            setLang={setUserOneLang}
            user="One"
          />
          <UserInitForm
            userName={userTwoName}
            setUserName={setUserTwoName}
            lang={userTwoLang}
            setLang={setUserTwoLang}
            user="Two"
          />
          <Button disabled={loading} type="submit">
            {loading ? (
              <Loader
                type="Puff"
                color="#f37022"
                height={50}
                width={50}
                timeout={10000}
              />
            ) : (
              "Start Chatting"
            )}
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Landing;
