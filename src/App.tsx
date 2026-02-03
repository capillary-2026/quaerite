import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Pipeline from './sections/Pipeline';
import Platform from './sections/Platform';
import Diseases from './sections/Diseases';
import Publications from './sections/Publications';
import News from './sections/News';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pipeline />
        <Platform />
        <Diseases />
        <Publications />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
