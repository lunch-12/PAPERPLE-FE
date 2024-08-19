import { ReactComponent as FavoriteIcon } from '../assets/svg/FavoriteIcon.svg';
import { ReactComponent as ShareIcon } from '../assets/svg/ShareIcon.svg';
import { ReactComponent as OpenInBrowserIcon } from '../assets/svg/OpenInBrowserIcon.svg';

interface NewsFooterProps {
  tags: string[];
}

const NewsFooter = ({ tags }: NewsFooterProps) => {
  return (
    <div className="flex flex-col mt-[16px]">
      <ul className="flex items-center">
        {tags.map((tag, index) => (
          <li
            key={`${tag}-${index}`}
            className={`px-[4px] py-[2px] bg-emphatic-background-1 rounded-[8px] text-system-white text-[12px]
                ${index == tags.length - 1 ? '' : 'mr-[4px]'}`}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-[4px] flex items-center justify-between">
        <div className="text-[#4C4C57] text-[12px] flex items-center justify-center">
          <p>중앙일보,</p>
          <p className="ml-[4px]">2023년 12월 28일</p>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <div className="flex items-center justify-center gap-[2px]">
            <FavoriteIcon width={16} height={16} />
            <p className="text-[14px]">17</p>
          </div>
          <button className="text-[10px] px-[6px] py-[2px] text-teritary-title border border-teritary-title rounded-[8px]">
            write
          </button>
          <OpenInBrowserIcon width={22} height={22} />
          <ShareIcon width={22} height={22} />
        </div>
      </div>
    </div>
  );
};

export default NewsFooter;
