import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import ProjectSection from './components/ProjectSection.js';
import ProjectSectionRecipe from './components/ProjectSectionRecipe.js';
import ProjectSectionLittle from './components/ProjectSectionLittle.js';
import ProjectSectionResearcher from './components/ProjectSectionResearcher.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Footer from './components/Footer.js';


function App() {
  return ( 
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Navbar />
            <Home/>
            <About />
            <ProjectSection />
            <ProjectSectionResearcher />
            <ProjectSectionRecipe />
            <ProjectSectionLittle />
            <Contact />
            <Footer />
          </main>
        </AlertProvider>
    </ChakraProvider>
  ); 
} 
 
export default App;