import { ReactComponent as NotificationIcon } from '../assets/svg/NotificationIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/svg/SearchIcon.svg';
import { ReactComponent as LogoIcon } from '../assets/svg/LogoIcon.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearchIconClick = () => {
    navigate('/search');
  };

  return (
    <header className="w-full h-[64px] px-[24px] bg-system-white flex items-center justify-between">
      <button onClick={handleLogoClick}>
        <LogoIcon width={88} height={21} fill="#1E1E1E" />
      </button>
      <div className="flex items-center justify-center space-x-1">
        <SearchIcon
          width={28}
          className="cursor-pointer"
          onClick={handleSearchIconClick}
        />
        <NotificationIcon width={28} />
      </div>
    </header>
  );
};

export default Header;
