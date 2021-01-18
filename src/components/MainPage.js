import React, { useState } from "react";
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

  const [form, setForm] = useState({
    artist: "",
    song: "",
  });

  const [lyrics, setLyrics] = useState([]);

  //   Fetching Api
  async function lyricsData(e) {
    e.preventDefault();
    if (form.artist === "" && form.song === "") {
      alert("Input Data");
    } else {
      const data = await fetch(
        `https://api.lyrics.ovh/v1/${form.artist}/${form.song}`
      )
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .catch((error) => console.log(error));
      setLyrics({
        data: data,
      });
    }
  }

  //   Handling Text Change
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "artist") {
      setForm({ ...form, artist: value });
    }
    if (name === "song") {
      setForm({ ...form, song: value });
    }
    // console.log(form.artist, form.song);
  };

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
            <form
              className={classes.main}
              autoComplete="on"
              onSubmit={(e) => lyricsData(e)}
            >
              <TextField
                id="standard-basic"
                label="Name of artist"
                color="secondary"
                name="artist"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Song title"
                color="secondary"
                name="song"
                onChange={(e) => handleChange(e)}
              />
              <Button
                variant="contained"
                color="secondary"
                className="p-3 btn"
                onClick={(e) => lyricsData(e)}
              >
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
                <h6>{form.artist}</h6>
              </div>
              <div className="col-6 title">
                <h6>{form.song}</h6>
              </div>
            </div>
            {lyrics.data !== undefined ? (
              <div>
                <LyricsPage data={lyrics.data} />
              </div>
            ) : null}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
