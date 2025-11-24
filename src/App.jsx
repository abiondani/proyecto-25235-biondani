import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import HotSale from './components/HotSale';
import Imperdibles from './components/Imperdibles';
import Login from './components/Login';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import Carrito from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';
import '../static/css/App.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotsale" element={<HotSale />} />
                    <Route path="/imperdibles" element={<Imperdibles />} />
                    <Route path="/administracion" element={<Login />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/crud" element={<CrudProductos />} />
                </Routes>
                <div style={{ minHeight: '100px' }}></div>
                <Footer/>
            </Router>
        </CartProvider>
    );
}

export default App
