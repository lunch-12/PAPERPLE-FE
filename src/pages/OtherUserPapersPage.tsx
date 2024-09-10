import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { UserPaperDTO } from '../types/dto/paper/UserPaperDTO';
import { ReactComponent as BackArrowIcon } from '../assets/svg/BackArrowIcon.svg';
import OtherUserPaperItem from '../components/OtherUserPaperItem';

const OtherUserPapersPage = () => {
  const { userId } = useParams<string>();
  const [papers, setPapers] = useState<UserPaperDTO[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPapers = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/paper/user/${userId}`,
          {
            withCredentials: true,
          },
        );
        setPapers(response.data);
      } catch (error) {
        console.error('User Paper API request failed:', error);
      }
    };

    fetchUserPapers();
  }, [userId]);

  const handleBackArrowClick = () => {
    navigate(-1);
  };

  return (
    <section className="w-full h-full">
      <header className="relative flex items-center pb-[10px] border-b-[1px] border-line-1">
        <button className="absolute left-4" onClick={handleBackArrowClick}>
          <BackArrowIcon />
        </button>
        <p className="mx-auto text-center font-semibold1">내 페이퍼</p>
      </header>
      {papers.length > 0 ? (
        <ul>
          {papers.map((paper, index) => (
            <li
              key={paper.content}
              className={`py-[16px] ${index != papers.length - 1 ? 'border-b' : ''}`}
            >
              <OtherUserPaperItem
                paperId={paper.paperId}
                nickname={paper.nickname}
                profileImage={paper.profileImage}
                content={paper.content}
                createdAt={paper.createdAt}
                isEdited={paper.isEdited}
                newspaper={paper.newspaper}
                isLikedByCurrentUser={paper.isLikedByCurrentUser}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="w-full h-full mt-[30px] my-auto flex items-center justify-center font-semibold">
          작성한 게시글이 없습니다.
        </p>
      )}
    </section>
  );
};

export default OtherUserPapersPage;
