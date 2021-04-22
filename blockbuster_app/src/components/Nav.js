import React, {useState, useEffect} from 'react'
import './Nav.css'


function Nav() {

    const [show, handleShow] = useState(false);            // setting up state of navbar background between dark and transparent

    const transitionNav = () => {
        if (window.scrollY>100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", transitionNav);
        return () => window.removeEventListener("scroll", transitionNav);
    }, []);





    return (
        <div className = {`nav ${show && "darkNav"}`}>

            <div className = "navContents">   {/* Houses the contents of the navbar */}

            <img 
            className = 'navLogo'
            src= "https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg" 
            alt = "" 
            />   {/* Blockbuster Logo */}

            <img 
            className = "navAvatar"
            src = "https://www.kindpng.com/picc/m/664-6643641_avatar-transparent-background-user-icon-hd-png-download.png"
            alt = ""
            />
            


            </div>

        </div>
    )
}

export default Nav
