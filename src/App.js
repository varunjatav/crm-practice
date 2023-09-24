import './App.css';
import Router from './Routes/Router';
import Navbar from './components/Navbar';
import Sidebar2 from './components/Sidebar2';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='flex  text-white' >
      <Sidebar2/>
      <Router/>
      </div>
      
    </div>
  );
}

export default App;
