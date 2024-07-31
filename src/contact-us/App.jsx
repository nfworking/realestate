import { Toaster } from "react-hot-toast";
import "./App.css";
import Contact from "../components/contact/Contact";


function App() {
  return (
    <>
   
      <Toaster position="top-right" reverseOrder={false} />
      
      <Contact />
  

    </>
  );
}

export default App;
