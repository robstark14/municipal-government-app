import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import News from './Components/News';
import './app.css'
// import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import ScrollArrow from './Components/ScrollArrow';
import Navbar from './Components/Navbar/Navbar';
import Memos from './Components/Memos';
import AboutMayor from './Components/AboutMayor';
import AboutCounter from './Components/AboutCounter';



function App() {
  return (
    <div className="App font-link">
      {/* <Preloader /> */}
     
        
        <Navbar />
        <Header id="home" />
        <ScrollArrow/>
        <AboutCounter />
        <News id="news" />
        <AboutMayor />
        {/* <Companies id="about" /> */}
        {/* <Services id="services" /> */}
        {/* <Experience /> */}
        <Projects />
        <Memos />
        <Footer />
    </div>
  );
}

export default App;
