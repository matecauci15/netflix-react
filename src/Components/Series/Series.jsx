// import Row from '../Row/Row'
// import axios from '../../../axios'
// import { useState } from 'react'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import Row from '../Row/Row'
import requests from '../../../Request'

const Series = () => {
    // const [series, setSeries] = useState([])

    return (
        <div className="series_back">
            <Nav />

            <Banner />

            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
                />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />            
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />            
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />            
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Series