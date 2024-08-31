import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import RegisterPaper from './pages/RegisterPaper';
import { useEffect } from 'react';
import setScreenHeight from './utils/setScreenHeight';
import 'pretendard/dist/web/static/pretendard.css';

function App() {
  useEffect(() => {
    setScreenHeight();

    const handleResize = () => setScreenHeight();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto h-real-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register-paper" element={<RegisterPaper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
