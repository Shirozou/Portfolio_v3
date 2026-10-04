import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 sm:px-8 print:max-w-none print:px-0">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
