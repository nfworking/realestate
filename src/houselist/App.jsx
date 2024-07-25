import "./App.css";
import Companies from "../components/home/Companies/Companies";
import Contact from "../components/home/Contact/Contact";
import Footer from "../components/houselist/Footer/Footer";
import GetStarted from "../components/home/GetStarted/GetStarted";
import Header from "../components/houselist/Header/Header";
import Hero from "../components/home/Hero/Hero";
import Residencies from "../components/houselist/Residencies/Residencies";
import Value from "../components/home/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        
     < Residencies />
      </div>
      
    
      
      <Footer/>
    </div>
  );
}

export default App;
