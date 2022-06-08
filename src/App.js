import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Recepies from './pages/Recepies';
import Settings from './pages/Settings';



function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recepie' element={<Recepies />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
