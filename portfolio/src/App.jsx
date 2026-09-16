import Hero from "./components/sections/Hero";
import Navbar from"./components/layout/Navbar";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import "./styles/global.css";

function App() {
  return (
    <>

    <Navbar/>

  <main> 
    <Hero/>
    <Skills/>
    <Projects/>

  </main>
    </>
  );
}

export default App;