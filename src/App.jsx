import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutPlatform from './components/AboutPlatform/AboutPlatform';
import Features from './components/Features/Features';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutPlatform />
      <Features />
      {/* Add other sections below */}
    </div>
  );
}

export default App;