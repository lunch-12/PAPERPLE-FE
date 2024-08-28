import { ReactComponent as FavoriteIcon } from '../assets/svg/FavoriteIcon.svg';

interface StockBannerProps {
  sector: string;
}

const StockBanner = ({ sector }: StockBannerProps) => {
  // TO DO - 외부 api로 sector의 주가 정보 가져오기

  return (
    <div className="h-[24px] bg-opposite-background-4 px-[4px] py-[5px] rounded-button flex items-center justify-center">
      <FavoriteIcon width={14} />
      <div className="ml-[4px] flex items-baseline justify-center font-semibold text-[12px]">
        <p className="text-teritary-title">{sector}</p>
        <p className="ml-[4px] text-system-red">359,000</p>
        <p className="ml-[4px] text-system-red text-[8px]">🔺4,000</p>
      </div>
    </div>
  );
};

export default StockBanner;
