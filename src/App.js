import './App.css';
import Router from './Routes/Router';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='flex items-center' >
      <Sidebar/>
      <Router/>
      </div>
      
    </div>
  );
}

export default App;
