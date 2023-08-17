import './HomeScreen.css'
import Nav from '../Nav/Nav.jsx'
import Banner from '../Banner/Banner.jsx'
import Row from '../Row/Row'
import requests from '../../../Request';

const HomeScreen = () =>  {
    return ( 
        <div className='homeScreen'>
            <Nav/>

            <Banner/>

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

export default HomeScreen

// https://www.teknofilo.com/wp-content/uploads/2021/06/Netflix-1280x720.jpg
// https://i0.wp.com/www.larocknpop.com/wp-content/uploads/2022/02/NETFLIX_123658.jpg?fit=1024%2C600&ssl=1
// https://www.nexofin.com/archivos/2020/04/series-netflix.jpg
