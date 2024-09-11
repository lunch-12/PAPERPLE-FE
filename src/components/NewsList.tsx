import { NewspaperDTO } from '../types/dto/paper/NewspaperDTO';
import NewsItem from './NewsItem';

const NewsList = () => {
  // TO DO - api를 통해 data fetch
  const newsData: NewspaperDTO[] = [
    {
      id: 1,
      isHotArticleBanner: true,
      title: 'CJ제일제당, 파리 ‘비비고 시장’에서 K푸드로 세계인 홀렸다',
      link: 'https://www.cj.co.kr/kr/newsroom/pressreleases/news-detail/1604',
      image:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      summaries: [
        "CJ 제일제당은 파리 올림픽 기간 동안 '비비고 시장' 행사를 통해 K-푸드를 알리며 큰 호응을 얻었다.",
        "'비비고 시장'에서 매일 500인분의 메뉴가 4시간 만에 품절되었고, 유럽 내 여러 유통채널로의 입점 기회가 확대되었다.",
        'CJ제일제당은 프랑스를 비롯한 유럽 전역으로 K-푸드 사업을 확장할 계획이다.',
      ],
      tags: ['IT/과학', '반도체'],
      date: '2023년 12월 28일',
      stockName: '삼성전자',
      stockCode: '005930',
      publishedAt: '중앙일보',
      createdAt: '2024년 08월 19일',
      likeNum: 17,
    },
    {
      id: 2,
      isHotArticleBanner: false,
      title: 'Another News Title',
      link: 'https://www.cj.co.kr/kr/newsroom/pressreleases/news-detail/1604',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      stockName: '카카오',
      stockCode: '035720',
      publishedAt: '중앙일보',
      createdAt: '2024년 08월 19일',
      likeNum: 17,
    },
    {
      id: 3,
      isHotArticleBanner: true,
      title: 'Another News Title',
      link: 'https://www.cj.co.kr/kr/newsroom/pressreleases/news-detail/1604',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      stockName: '카카오',
      stockCode: '035720',
      publishedAt: '중앙일보',
      createdAt: '2024년 08월 19일',
      likeNum: 17,
    },
    {
      id: 4,
      isHotArticleBanner: true,
      title: 'CJ제일제당, 파리 ‘비비고 시장’에서 K푸드로 세계인 홀렸다',
      link: 'https://www.cj.co.kr/kr/newsroom/pressreleases/news-detail/1604',
      image:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      summaries: [
        "CJ 제일제당은 파리 올림픽 기간 동안 '비비고 시장' 행사를 통해 K-푸드를 알리며 큰 호응을 얻었다.",
        "'비비고 시장'에서 매일 500인분의 메뉴가 4시간 만에 품절되었고, 유럽 내 여러 유통채널로의 입점 기회가 확대되었다.",
        'CJ제일제당은 프랑스를 비롯한 유럽 전역으로 K-푸드 사업을 확장할 계획이다.',
      ],
      tags: ['IT/과학', '반도체'],
      date: '2023년 12월 28일',
      stockName: '카카오',
      stockCode: '035720',
      publishedAt: '중앙일보',
      createdAt: '2024년 08월 19일',
      likeNum: 17,
    },
    {
      id: 5,
      isHotArticleBanner: false,
      title: 'Another News Title',
      link: 'https://www.cj.co.kr/kr/newsroom/pressreleases/news-detail/1604',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      stockName: '카카오',
      stockCode: '035720',
      publishedAt: '중앙일보',
      createdAt: '2024년 08월 19일',
      likeNum: 17,
    },
    {
      id: 6,
      isHotArticleBanner: true,
      title: 'Another News Title',
      link: 'https://www.cj.co.kr/kr/newsroom/pressreleases/news-detail/1604',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      stockName: '카카오',
      stockCode: '035720',
      publishedAt: '중앙일보',
      createdAt: '2024년 08월 19일',
      likeNum: 17,
    },
  ];

  return (
    <section className="w-full">
      <ul>
        {newsData.map((news, index) => (
          <li
            key={news.title}
            className={`py-[16px] ${index != newsData.length - 1 ? 'border-b' : ''}`}
          >
            <NewsItem
              isHotArticleBanner={news.isHotArticleBanner}
              stockName={news.stockName}
              stockCode={news.stockCode}
              title={news.title}
              link={news.link}
              summaries={news.summaries}
              tags={news.tags}
              publishedAt={news.publishedAt}
              createdAt={news.createdAt}
              likeNum={news.likeNum}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
