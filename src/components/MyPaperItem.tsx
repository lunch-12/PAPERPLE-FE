import { NewspaperInPaperDTO } from '../types/dto/paper/PaperDTO';
import MyPaperFooter from './MyPaperFooter';
import PaperContent from './PaperContent';
import PaperHeader from './PaperHeader';

interface MyPaperItemProps {
  nickname: string;
  profileImage: string;
  content: string;
  createdAt: string;
  isEdited: boolean;
  newspaper: NewspaperInPaperDTO | null;
}

const MyPaperItem = ({
  nickname,
  profileImage,
  content,
  createdAt,
  isEdited,
  newspaper,
}: MyPaperItemProps) => {
  return (
    <div className="w-full">
      <PaperHeader nickname={nickname} profileImage={profileImage} />
      <PaperContent content={content} newspaper={newspaper} />
      <MyPaperFooter createdAt={createdAt} isEdited={isEdited} />
    </div>
  );
};

export default MyPaperItem;
