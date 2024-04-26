import Hero from './assets/components/Hero';
import Demo from './components/Demo';


import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gridient">
        </div>
        <div className='app'>
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  )
}

export default App