import React, { useState } from "react";
import { useGif } from "../hooks";
import Loading from "../partials/Loading";

const Tag_V2 = () => {
  const [tag, setTag] = useState<string>("cat");

  const { gif, title, loading, fetchGif, setLoading } = useGif(tag);

  const handleClick = () => {
    setLoading(true);
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      {loading ? <Loading /> : <img width="300" src={gif} alt={title} />}
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag_V2;
