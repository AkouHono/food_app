import{
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom"
 

import Navbar from "./components/Navbar";
import "./styles/index.scss";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Setting from "./pages/Setting";


function App() {
  return (
    <Router>
      <Navbar/>
     <div className="container main">
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/Recipes" element={<Recipes />} />
         <Route path="/settings" element={<Setting />} />
       </Routes>
     </div>
     <Footer/>
    </Router>
  
  );
}

export default App;
