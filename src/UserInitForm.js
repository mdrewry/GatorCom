import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import isoLangs from "./langs";
import { Typography } from "@material-ui/core";
function UserInitForm({ setUserName, setLang, user }) {
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const langs = Object.keys(isoLangs).map((key) => {
    return {
      label: `${isoLangs[key].name}, ${isoLangs[key].nativeName}`,
      value: key,
    };
  });
  return (
    <Paper className="landingFieldPaperWrapper">
      <Typography className="landingFieldText">User {user}</Typography>
      <div className="landingFieldItem">
        <div className="landingNameWrapper">
          <TextField
            fullWidth={true}
            onChange={handleNameChange}
            label="Name"
            placeholder={user === "One" ? "Andrea" : "Nelson"}
            required
          />
        </div>
        <div className="landingLangWrapper">
          <TextField
            fullWidth={true}
            onChange={handleLangChange}
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
        </div>
      </div>
    </Paper>
  );
}

export default UserInitForm;
