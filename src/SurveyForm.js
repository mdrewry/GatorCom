import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
function SurveyForm({ labels }) {
  return (
    <Grid className="landingWrapper" item xs={12}>
      <Typography className="landingTitle">
        {labels.header.langOne}
        <br />
        {labels.header.langTwo}
      </Typography>
      <a href="https://forms.gle/PHT8PrXNEHmdnRDi8">
        <Button variant="contained" className="visitSurveyButton">
          {labels.button.langOne}
          <br />
          {labels.button.langTwo}
        </Button>
      </a>
    </Grid>
  );
}

export default SurveyForm;
