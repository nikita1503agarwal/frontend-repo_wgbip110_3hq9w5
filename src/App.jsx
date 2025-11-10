import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import RegisterCTA from './components/RegisterCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <InfoSections />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
