import { ReactComponent as EditIcon } from '../assets/svg/EditIcon.svg';
import { ReactComponent as DeleteIcon } from '../assets/svg/DeleteIcon.svg';
import { formatDate } from '../utils/formateDate';

interface MyPaperFooterProps {
  createdAt: string;
  isEdited: boolean;
}

const MyPaperFooter = ({ createdAt, isEdited }: MyPaperFooterProps) => {
  const formattedCreatedAt = formatDate(createdAt);

  return (
    <div className="flex flex-col mt-[16px]">
      <div className="mt-[4px] flex items-center justify-between">
        <div className="text-[#4C4C57] text-[12px] flex items-center justify-center">
          <p>{`${formattedCreatedAt}${isEdited ? '(수정됨)' : ''}`}</p>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <button>
            <EditIcon width={16} height={16} />
          </button>
          <button>
            <DeleteIcon width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPaperFooter;
