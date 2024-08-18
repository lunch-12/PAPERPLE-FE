import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
