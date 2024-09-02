import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaperList from '../components/PaperList';
import NewsList from '../components/NewsList';
import ContentsTab from '../components/ContentsTab';
import Search from '../components/Search';
import { Tab } from '../types/enums';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<{
    papers: any[];
    news: any[];
  } | null>(null);
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.News);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.debug(`Search for: ${searchQuery}`);
    const results = performSearch(searchQuery);
    setSearchResults(results);
  };

  const performSearch = (query: string) => {
    return {
      papers: [
        {
          paperId: 1,
          nickname: 'Paperple',
          profileImage:
            'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
          content: `Paper content related to "${query}"`,
          view: 0,
          createdAt: '2023년 12월 28일',
          isEdited: true,
          likeNum: 17,
          newspaper: null,
        },
      ],
      news: [
        {
          id: 1,
          isHotArticleBanner: true,
          title: `News title related to "${query}"`,
          link: 'https://example.com',
          image: 'https://via.placeholder.com/100',
          summaries: ['Summary 1', 'Summary 2', 'Summary 3'],
          tags: ['Tag1', 'Tag2'],
          date: '2024-01-01',
          sector: 'News Sector',
          publishedAt: 'Published At',
          createdAt: '2024-01-01',
          likeNum: 8,
        },
      ],
    };
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100">
      <form onSubmit={handleSearchSubmit} className="w-full max-w-lg mt-4">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onBackClick={handleBackClick}
        />
        {searchResults && (
          <>
            <ContentsTab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <div className="mt-4">
              {selectedTab === Tab.News && <NewsList />}
              {selectedTab === Tab.Paper && <PaperList />}
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SearchPage;
