import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RegisterPaper from './pages/RegisterPaper';
import { useEffect } from 'react';
import setScreenHeight from './utils/setScreenHeight';
import 'pretendard/dist/web/static/pretendard.css';
import LoginModal from './components/LoginModal';

function App() {
  useEffect(() => {
    setScreenHeight();

    const handleResize = () => setScreenHeight();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto h-real-screen">
      <Header />
      <LoginModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register-paper" element={<RegisterPaper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
