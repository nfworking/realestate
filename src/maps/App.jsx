import "./App.css";
import Housemap from "../components/maps/maps";
import Footer from "../components/maps/Footer/Footer";
import Header from "../components/maps/Header/Header";

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
