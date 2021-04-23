import React , {useState, useEffect} from 'react'
import './Banner.css'
import axios from "../axios"
import requests from '../Requests'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{

        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );

            return request;
        }
            fetchData();
    }, []);

    console.log(movie);

    // Truncate function to cut off text from descriptions that are too long in the banner
    // The truncate function takes in a string and the "n" represents the number of characters (limit)
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;

    }
    return (
        <header className = 'banner' style = {{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            

            <div className = "bannerContents">
                <h1 className = "bannerTitle">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className = "bannerButtons">
                    <button className="bannerButton">Play</button>
                    <button className= "bannerButton">My List</button>
                </div>
                <h1 className = "bannerDescription"> {truncate (
                    movie?.overview, 150)}</h1>
            </div>

            <div className = "bannerFadeBottom" />
        </header>
    )
}

export default Banner
