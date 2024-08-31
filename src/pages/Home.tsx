import { useState } from 'react';
import ContentsTab from '../components/ContentsTab';
import NewsList from '../components/NewsList';
import { Tab } from '../types/enums';
import PaperList from '../components/PaperList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.News);
  const navigate = useNavigate();

  const handlePaperRegisterClick = () => {
    navigate('/register-paper');
  };

  return (
    <div className="w-full h-full relative">
      <div>
        <ContentsTab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="px-[15px]">
        {selectedTab === Tab.News ? <NewsList /> : <PaperList />}
      </div>
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2">
        <button
          onClick={handlePaperRegisterClick}
          className="bg-blue-500 text-white py-[10px] px-[20px] rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        >
          페이퍼 등록하기
        </button>
      </div>
    </div>
  );
};

export default Home;
