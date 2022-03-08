
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";

import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";


// const Home = () => {
  
// };

function App() {
 
 

  return (
    <HashRouter> 
      <Routes>
        <Route>
          <Route path="/" element={<Layout/>}> 
            <Route index element={<Home/>} />
            <Route exact path="projects" element={<Projects/>}/>
            <Route exact path="skills" element={<Skills/>}/>
            <Route exact path="about" element={<AboutMe/>}/>
            <Route exact path="contact" element={<ContactMe/>}/>
          </Route>
      </Route>
    </Routes>
    </HashRouter> 
   
);
}

export default App;