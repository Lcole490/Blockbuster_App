import React from 'react'
import './Banner.css'

function Banner() {

    // Truncate function to cut off text from descriptions that are too long in the banner
    // The truncate function takes in a string and the "n" represents the number of characters (limit)
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;

    }
    return (
        <header className = 'banner' style = {{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage : `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`
        }}>
            

            <div className = "bannerContents">
                <h1 className = "bannerTitle">Movie Name</h1>
                <div className = "bannerButtons">
                    <button className="bannerButton">Play</button>
                    <button className= "bannerButton">My List</button>
                </div>
                <h1 className = "bannerDescription"> {truncate (`Description of film goes here Description of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes hereDescription of film goes here`, 150)}</h1>
            </div>

            <div className = "bannerFadeBottom" />
        </header>
    )
}

export default Banner
