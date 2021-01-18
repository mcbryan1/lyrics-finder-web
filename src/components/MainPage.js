import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import "./Style.css";
import LyricsPage from "./LyricsPage";

const useStyles = makeStyles((theme) => ({
  main: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));
function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Lyrics Fyndr
          </Typography>
          <Typography className={classes.title}>
            Search For Lyrics of your Favorite Songs
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <form className={classes.main} autoComplete="on">
              <TextField
                id="standard-basic"
                label="Name of artist"
                color="secondary"
                className="field"
              />
              <TextField
                id="standard-basic"
                label="Song title"
                color="secondary"
              />
              <Button variant="contained" color="secondary" className="p-3 btn">
                <SearchIcon /> Search
              </Button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5">
            <div className="row mb-3 ">
              <div className="col-6 title">
                <h6>Solomon McBryan</h6>
              </div>
              <div className="col-6 title">
                <h6>Love of my life</h6>
              </div>
            </div>
            <LyricsPage />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
