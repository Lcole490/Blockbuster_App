import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
// import requests from '../Requests'
import Row from './Row'
import requests from '../Requests'

function HomeScreen() {
    return (
        <div className = "homeScreen">
            {/* Navbar */}

            <Nav />

            {/* Banner */}

            <Banner />

            {/* Row */}

            <Row title = "Trending Now" fetchURL={requests.fetchTrending} isLargeRow/>
            <Row title = "Top Rate" fetchURL={requests.fetchTopRated}/>
            <Row title = "Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title = "Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title = "Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title = "Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title = "Documentaries" fetchURL={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
