import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Teste } from './pages/HOOKS/useState';
import { Teste2 } from './pages/HOOKS/useEffect';
import { Teste3 } from './pages/HOOKS/useMemo';
import { Teste4 } from './pages/HOOKS/useCallBack';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="/teste2" element={<Teste2 />} />
                <Route path="/teste3" element={<Teste3 />} />
                <Route path="/teste4" element={<Teste4 />} />
            </Routes>
        </Router>
    );
}

export default App;
