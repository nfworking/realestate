import "./App.css";
import Housemap from "../components/maps/maps";
import Footer from "../components/home/Footer/Footer";
import Header from "../components/home/Header/Header";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
     <Header />
     
      </div>
     
  <Housemap />
      
   <Footer />
    </div>
  );
}

export default App;
