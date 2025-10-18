import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import HotSale from './components/HotSale';
// import Imperdibles from './components/Imperdibles';
// import Login from './components/Login'; 
import Footer from './components/Footer'
import '../static/css/App.css';

function App() {

  return (

     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/hotsale" element={<HotSale />} />
        <Route path="/imperdibles" element={<Imperdibles />} />
        <Route path="/administracion" element={<Login />} />         */}
      </Routes>
      <div style={{ minHeight: '100px' }}></div>
      <Footer/>
    </Router>

  )
}

export default App
