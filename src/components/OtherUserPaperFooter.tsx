import { useEffect } from 'react';
import { ReactComponent as FavoriteIcon } from '../assets/svg/FavoriteIcon.svg';
import { formatDate } from '../utils/formateDate';
import useAuthStore from '../stores/useAuthStore';

interface OtherUserPaperFooterProps {
  paperId: number;
  createdAt: string;
  isEdited: boolean;
}

const OtherUserPaperFooter = ({
  paperId,
  createdAt,
  isEdited,
}: OtherUserPaperFooterProps) => {
  const formattedCreatedAt: string = formatDate(createdAt);

  return (
    <div className="flex flex-col mt-[16px]">
      <div className="mt-[4px] flex items-center justify-between">
        <div className="text-[#4C4C57] text-[12px] flex items-center justify-center">
          <p>{`${formattedCreatedAt}${isEdited ? '(수정됨)' : ''}`}</p>
        </div>
        <button className="flex items-center justify-center gap-[8px]">
          <FavoriteIcon width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default OtherUserPaperFooter;
