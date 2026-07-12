import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Platform from './sections/Platform';
import Pipeline from './sections/Pipeline';
import Diseases from './sections/Diseases';
import Publications from './sections/Publications';
import Team from './sections/Team';
import News from './sections/News';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Platform />
        <Pipeline />
        <Diseases />
        <Publications />
        <Team />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
