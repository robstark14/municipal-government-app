import Header from './Components/Header';
import Projects from './Components/Projects';

import './app.css'
// import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import ScrollArrow from './Components/ScrollArrow';
import Navbar from './Components/Navbar/Navbar';
import Memos from './Components/Memos';
import AboutMayor from './Components/AboutMayor';
import AboutCounter from './Components/AboutCounter';
import { Route, BrowserRouter as Router,
  Routes } from 'react-router-dom';
import Tourism from './Components/Tourism/Tourism';
import Home from './Components/Home';
import PlaceDetails from './Components/Tourism/PlaceDetails';
import Services from './Components/Services/Services';
import Transparency from './Components/Transparency/Transparency';
import About from './Components/About/About';
import ScrollToTop from './Components/ScrollToTop';
import NewsDetails from './Components/News/NewsDetails';



function App() {
  return (
    <div className="App font-link">    
      {/* <Router> */}
      <ScrollToTop smooth />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/tourism' element={<Tourism />} />
          <Route path={`places/:placeId`} element={<PlaceDetails />}/>
          <Route path={`news/:newsId`} element={<NewsDetails />}/>
          <Route path='/services/*' element={<Services />} />
          <Route path='/transparency/*' element={<Transparency />} />
          <Route path='/about/*' element={<About />} />

          

        </Routes>
      {/* </Router> */}
      
      <ScrollArrow/>
      <Footer id="footer"/>


      {/* <Companies id="about" /> */}
      {/* <Services id="services" /> */}
      {/* <Experience /> */}
    </div>
  );
}

export default App;
