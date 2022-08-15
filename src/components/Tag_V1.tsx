import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState<string>("cat");
  const [gif, setGif] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const fetchGif = async (tag: string) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;
    const titleGif = data.title;

    setGif(imageSrc);
    setTitle(titleGif);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="300" src={gif} alt={title} />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
