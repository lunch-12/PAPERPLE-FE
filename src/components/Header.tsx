import { ReactComponent as SettingIcon } from '../assets/svg/SettingIcon.svg';
import { ReactComponent as NotificationIcon } from '../assets/svg/NotificationIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/svg/SearchIcon.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    navigate('/search');
  };

  return (
    <header className="w-full h-[64px] px-[24px] bg-system-white flex items-center justify-between">
      <p className="text-[22px] text-system-black font-extrabold">Paperple</p>
      <div className="flex items-center justify-center space-x-1">
        <SearchIcon width={28} className="cursor-pointer" onClick={handleSearchIconClick} />
        <NotificationIcon width={28} />
        <SettingIcon width={28} />
      </div>
    </header>
  );
};

export default Header;
