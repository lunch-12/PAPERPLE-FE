import { ReactComponent as SettingIcon } from '../assets/svg/SettingIcon.svg';
import { ReactComponent as NotificationIcon } from '../assets/svg/NotificationIcon.svg';

const Header = () => {
  return (
    <header className="w-full h-[64px] px-[24px] bg-system-white flex items-center justify-between">
      <p className="text-[22px] text-system-black font-extrabold">Paperple</p>
      <div className="flex items-center justify-center space-x-1">
        <NotificationIcon width={28} />
        <SettingIcon width={28} />
      </div>
    </header>
  );
};

export default Header;
