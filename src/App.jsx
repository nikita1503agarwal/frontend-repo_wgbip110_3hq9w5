import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import EnhancedRegisterCTA from './components/EnhancedRegisterCTA';
import Footer from './components/Footer';
import BlueThemeWrapper from './components/BlueThemeWrapper';
import RouterLinks from './components/RouterLinks';

function App() {
  return (
    <BlueThemeWrapper>
      <RouterLinks />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <InfoSections />
          <EnhancedRegisterCTA />
        </main>
        <Footer />
      </div>
    </BlueThemeWrapper>
  );
}

export default App;
