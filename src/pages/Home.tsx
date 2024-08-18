import { useState } from 'react';
import ContentsTab from '../components/ContentsTab';
import NewsList from '../components/NewsList';
import { Tab } from '../types/enums';

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
        {selectedTab === Tab.News ? <NewsList /> : <div></div>}
      </div>
    </div>
  );
};

export default Home;
