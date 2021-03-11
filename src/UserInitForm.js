import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import isoLangs from "./langs";
import { Typography } from "@material-ui/core";
function UserInitForm({ setUserName, lang, setLang, user }) {
  const langs = Object.keys(isoLangs).map((key) => {
    return {
      label: `${isoLangs[key].name}, ${isoLangs[key].nativeName}`,
      value: key,
    };
  });
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleLangChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <Paper className="landingFieldPaperWrapper">
      <Typography className="landingFieldText">User {user}</Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <TextField
            fullWidth={true}
            onChange={handleNameChange}
            label="Name"
            placeholder={user === "One" ? "Andrea" : "Nelson"}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <TextField
            fullWidth={true}
            onChange={handleLangChange}
            value={lang}
            label="Language"
            placeholder={user === "One" ? "en" : "de"}
            select
            required
          >
            {langs.map((lang, index) => (
              <MenuItem key={index} value={lang.value}>
                {lang.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserInitForm;
