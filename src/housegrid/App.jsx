import "./App.css";
import HouseGrid from "../components/housegrid/HouseGrid";
import Header from "../components/houselist/Header/Header";
import Footer from "../components/houselist/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HouseGrid />
      <Footer />
    </div>
  );
}

export default App;
