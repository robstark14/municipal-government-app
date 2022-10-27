import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import './app.css'
// import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import ScrollArrow from './Components/ScrollArrow';
import Navbar from './Components/Navbar';
import Memos from './Components/Memos';



function App() {
  return (
    <div className="App font-link">
      {/* <Preloader /> */}
     
        
        <Navbar />
        <Header id="home" />
        <ScrollArrow/>
        {/* <Companies id="about" /> */}
        {/* <Services id="services" /> */}
        {/* <Experience /> */}
        <Memos />
        <Projects id="projects" />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
