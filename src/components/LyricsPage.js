import React from "react";
import "./Style.css";

function LyricsPage(props) {
  const { data } = props;
  return (
    <div className="lyrics">
      {data.lyrics ? (
        <p>{data.lyrics}</p>
      ) : (
        <h4 className="text-center noLyrics">No Lyrics Found</h4>
      )}
    </div>
  );
}

export default LyricsPage;
