
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ProjectGallery from './Components/Project/ProjectGallery';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Project/data';
import Navbar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <Header />
      <ProjectGallery projects={Projects} />
      <Contact />
    </div>
  );
};

export default App;