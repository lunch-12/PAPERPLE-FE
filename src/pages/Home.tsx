import { useState } from 'react';
import ContentsTab from '../components/ContentsTab';
import NewsList from '../components/NewsList';
import { Tab } from '../types/enums';
import PaperList from '../components/PaperList';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.News);

  return (
    <div className="w-full h-full">
      <div>
        <ContentsTab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="px-[15px]">
        {selectedTab === Tab.News ? <NewsList /> : <PaperList />}
      </div>
    </div>
  );
};

export default Home;
