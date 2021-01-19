import React from "react";
import "./Style.css";

function LyricsPage(props) {
  const { data } = props;
  return (
    <div className="lyrics">
      {data.lyrics ? <p>{data.lyrics}</p> : <p className='text-center'>No Lyrics Found</p>}
    </div>
  );
}

export default LyricsPage;
