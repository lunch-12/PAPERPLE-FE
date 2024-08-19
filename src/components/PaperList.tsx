import { PaperDTO } from '../types/dto/paper/PaperDTO';
import PaperItem from './PaperItem';

const PaperList = () => {
  // TO DO - api를 통해 data fetch
  const paperData: PaperDTO[] = [
    {
      paperId: 1,
      nickname: 'Paperple',
      profileImage:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      content:
        '삼전 주식 지금 매수해야합니다.\n급락은 매수 기회라네요 다들 ㄱㄱ',
      view: 0,
      image: null,
      createdAt: '2023년 12월 28일',
      isEdited: true,
      likeNum: 17,
      newspaper: null,
    },
    {
      paperId: 2,
      nickname: 'Paperple',
      profileImage:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      content:
        '삼전 주식 지금 매수해야합니다.\n급락은 매수 기회라네요 다들 ㄱㄱ',
      view: 0,
      image: null,
      createdAt: '2023년 12월 28일',
      isEdited: false,
      likeNum: 17,
      newspaper: null,
    },
    {
      paperId: 3,
      nickname: 'Paperple',
      profileImage:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      content:
        '삼전 주식 지금 매수해야합니다.\n급락은 매수 기회라네요 다들 ㄱㄱ',
      view: 0,
      image: null,
      createdAt: '2023년 12월 28일',
      isEdited: false,
      likeNum: 17,
      newspaper: {
        title: 'CJ제일제당, 파리 ‘비비고 시장’에서 K푸드로 세계인 홀렸다',
        image:
          'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
        summaries: [
          "CJ 제일제당은 파리 올림픽 기간 동안 '비비고 시장' 행사를 통해 K-푸드를 알리며 큰 호응을 얻었다.",
          "'비비고 시장'에서 매일 500인분의 메뉴가 4시간 만에 품절되었고, 유럽 내 여러 유통채널로의 입점 기회가 확대되었다.",
          'CJ제일제당은 프랑스를 비롯한 유럽 전역으로 K-푸드 사업을 확장할 계획이다.',
        ],
        tags: ['IT/과학', '반도체'],
        date: '2023년 12월 28일',
        sector: 'CJ제일제당',
        publishedAt: '중앙일보',
        createdAt: '2024년 08월 19일',
        likeNum: 17,
      },
    },
  ];

  return (
    <section className="w-full">
      <ul>
        {paperData.map((paper, index) => (
          <li
            key={paper.content}
            className={`py-[16px] ${index != paperData.length - 1 ? 'border-b' : ''}`}
          >
            <PaperItem
              nickname={paper.nickname}
              profileImage={paper.profileImage}
              content={paper.content}
              createdAt={paper.createdAt}
              isEdited={paper.isEdited}
              likeNum={paper.likeNum}
              newspaper={paper.newspaper}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PaperList;
