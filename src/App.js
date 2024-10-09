import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/contact/Contact';
import Project from './components/Project/Project';

function App() {
  return (
    <>

    <Header/>
    <main className="main">
      <Home />
      <About/>
      <Skills />
      {/* <Services /> */}
      <Project/>
      <Qualification />
      <Contact />
    </main>
    </>    
  );
}

export default App;