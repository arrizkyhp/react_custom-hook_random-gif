import React, { useState } from "react";
import { useGif } from "./hooks";
import Loading from "./partials/Loading";

const Random_V2 = () => {
  const { gif, title, loading, fetchGif, setLoading } = useGif();

  const handleClick = () => {
    setLoading(true);
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      {loading ? <Loading /> : <img width="300" src={gif} alt={title} />}
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random_V2;
