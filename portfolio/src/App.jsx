// App.jsx

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import GitHubDashboard from "./components/sections/GitHubDashboard";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <GitHubDashboard />
        <About />
        <Contact />
      </main>
       <Footer /> 
    </>
  );
}

export default App;