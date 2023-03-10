import Header from './Components/Header';
import Home from './Components/Home';
import ProjectGallery from './Components/ProjectGallery';
import Contact from './Components/Contact';
import Projects from './Components/data';
import Navbar from './Components/NavBar';

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <Header />
      <ProjectGallery projects={Projects} />
      <Contact />
      {/* <Project /> */}
    </div>
  );
};

export default App;
