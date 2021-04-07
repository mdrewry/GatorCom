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
    const translateLabels = functions.httpsCallable("translateLabels");
    const translation = await translateLabels({
      query,
      langOne: userOneLang,
      langTwo: userTwoLang,
    });
    return translation.data;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const query = {
      surveyHeader: "Thanks for using the app!",
      surveyButton: "Send Feedback",
      userButtons: "Translate",
      userAutoComplete: "Say Something",
      sessionEndButton: "End Session",
      ratingHeader: "Was the translation helpful?",
      ratingLabelOne: "Yes",
      ratingLabelTwo: "No",
    };
    const translation = await getTranslation(query);
    setSurveyLabels({
      header: {
        langOne: translation["surveyHeader"].langOne,
        langTwo: translation["surveyHeader"].langTwo,
      },
      button: {
        langOne: translation["surveyButton"].langOne,
        langTwo: translation["surveyButton"].langTwo,
      },
    });
    setUserOneLabels({
      button: translation["userButtons"].langOne,
      autocomplete: translation["userAutoComplete"].langOne,
      ratingHeader: translation["ratingHeader"].langOne,
      ratingOne: translation["ratingLabelOne"].langOne,
      ratingTwo: translation["ratingLabelTwo"].langOne,
    });
    setUserTwoLabels({
      button: translation["userButtons"].langTwo,
      autocomplete: translation["userAutoComplete"].langTwo,
      ratingHeader: translation["ratingHeader"].langTwo,
      ratingOne: translation["ratingLabelOne"].langTwo,
      ratingTwo: translation["ratingLabelTwo"].langTwo,
    });
    setSessionEndButtonLabel({
      langOne: translation["sessionEndButton"].langOne,
      langTwo: translation["sessionEndButton"].langTwo,
    });
    setLoading(false);
    handleNextPage();
  };
  return (
    <Grid className="landingWrapper" item xs={12}>
      <div className="grow" />
      <Typography className="landingTitle">Welcome to GatorCom</Typography>
      <div className="grow" />
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
                timeout={20000}
              />
            ) : (
              "Start Chatting"
            )}
          </Button>
        </form>
      </Paper>
      <div className="grow" />
    </Grid>
  );
}

export default Landing;
