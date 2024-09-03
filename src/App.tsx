import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import RegisterPaper from './pages/RegisterPaper';
import { useEffect } from 'react';
import setScreenHeight from './utils/setScreenHeight';
import 'pretendard/dist/web/static/pretendard.css';
import LoginModal from './components/LoginModal';
import UserPage from './pages/UserPage';
import BottomTab from './components/BottomTab';

function App() {
  useEffect(() => {
    setScreenHeight();

    const handleResize = () => setScreenHeight();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto h-real-screen relative">
      <BrowserRouter>
        <Header />
        <LoginModal />
        <div className="pb-[60px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/register-paper" element={<RegisterPaper />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
        <BottomTab />
      </BrowserRouter>
    </div>
  );
}

export default App;
