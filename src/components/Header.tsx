import { ReactComponent as SettingIcon } from '../assets/svg/SettingIcon.svg';
import { ReactComponent as NotificationIcon } from '../assets/svg/NotificationIcon.svg';
import { ReactComponent as LogoIcon } from '../assets/svg/LogoIcon.svg';

const Header = () => {
  return (
    <header className="w-full h-[64px] px-[24px] bg-system-white flex items-center justify-between">
      <LogoIcon width={88} height={21} fill="#1E1E1E" />
      <div className="flex items-center justify-center space-x-1">
        <NotificationIcon width={28} />
        <SettingIcon width={28} />
      </div>
    </header>
  );
};

export default Header;
