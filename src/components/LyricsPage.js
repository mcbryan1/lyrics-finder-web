import React from "react";
import './Style.css'

function LyricsPage(props) {
  const { data } = props;
  return (
    <div className="lyrics">
      <p>
        {data.lyrics}
      </p>
    </div>
  );
}

export default LyricsPage;
