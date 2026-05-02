import './App.css';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import CryptoTracker from './CryptoTracker';
import Weather from './Weather';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{maxWidth:'900px',margin:'40px auto',padding:'0 20px',fontFamily:'Arial, sans-serif'}}>
        <Projects />
        <CryptoTracker />
        <Weather />
        <Contact />
      </div>
    </div>
  );
}
export default App;
