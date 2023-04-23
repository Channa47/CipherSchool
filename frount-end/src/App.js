import "./App.css";
import Abountme from "./Componenets/Abountme";
import Details from "./Componenets/Details";
import Map from "./Componenets/Map";
import Navbar from "./Componenets/Navbar";
import Profile from "./Pages/Profile";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Details />
       <Abountme/>
       <Map/>
    </div>
  );
}

export default App;
