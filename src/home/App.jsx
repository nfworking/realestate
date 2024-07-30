import "./App.css";
import Companies from "../components/home/Companies/Companies";
import Contact from "../components/home/Contact/Contact";
import Footer from "../components/home/Footer/Footer";
import GetStarted from "../components/home/GetStarted/GetStarted";
import Header from "../components/home/Header/Header";
import Hero from "../components/home/Hero/Hero";
import Residencies from "../components/home/Residencies/Residencies";
import Value from "../components/home/Value/Value";
import Testimonals from "../components/testimonals/App";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
    
      <Value/>
      <Testimonals />
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
