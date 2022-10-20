import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Teste } from './pages/HOOKS/useState';
import { Teste2 } from './pages/HOOKS/useEffect';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="/teste2" element={<Teste2 />} />
            </Routes>
        </Router>
    );
}

export default App;
