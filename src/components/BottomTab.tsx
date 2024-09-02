import { useNavigate, useLocation } from 'react-router-dom';
import HomePageIcon from '../assets/png/HomePageIcon.png';
import RegisterPaperIcon from '../assets/png/RegisterPaperIcon.png';
import FavoriteIcon from '../assets/png/FavoriteIcon.png';
import UserPageIcon from '../assets/png/UserPageIcon.png';

interface TabIconProps {
  path: string;
  src: string;
  alt: string;
  isSelected: boolean;
}
const TabIcon = ({ path, src, alt, isSelected }: TabIconProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className={`cursor-pointer w-[39px] h-[39px] flex items-center justify-center ${isSelected ? 'bg-white rounded-full' : ''}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-[23px]"
        style={{
          filter: isSelected
            ? 'invert(54%) sepia(9%) saturate(3563%) hue-rotate(211deg) brightness(78%) contrast(88%)'
            : 'invert(100%) brightness(0%)',
        }}
      />
    </div>
  );
};

const BottomTab = () => {
  const location = useLocation();
  const tabs = [
    {
      path: '/',
      src: HomePageIcon,
      alt: 'Navigation Icon to Home Page',
    },
    {
      path: '/register-paper',
      src: RegisterPaperIcon,
      alt: 'Navigation Icon to Register Paper Page',
    },
    {
      path: '/favorite', // TO DO - 좋아요 페이지 path 추가
      src: FavoriteIcon,
      alt: 'Navigation Icon to Favorite Page',
    },
    {
      path: '/user',
      src: UserPageIcon,
      alt: 'Navigation Icon to User Page',
    },
  ];

  return (
    <nav className="w-full max-w-sm h-[52px] fixed bottom-0 bg-[#B5AADE] rounded-t-[28px] flex items-center justify-between px-[40px]">
      {tabs.map(tab => (
        <TabIcon
          key={tab.path}
          path={tab.path}
          src={tab.src}
          alt={tab.alt}
          isSelected={location.pathname === tab.path}
        />
      ))}
    </nav>
  );
};

export default BottomTab;
