import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag?: string) => {
    const [gif, setGif] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    const fetchGif = async (tag?: string) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

        const imageSrc = data.data.images.downsized_large.url;
        const titleGif = data.title;

        setGif(imageSrc);
        setTitle(titleGif);
        setLoading(false)
    };

    useEffect(() => {
        fetchGif(tag);
    }, []);



    return { gif, title, loading, fetchGif, setLoading }

};

export default useGif;
