import { ReactComponent as DefaultProfileImage } from '../assets/svg/DefaultProfileImage.svg';
import { ReactComponent as MyPaperIcon } from '../assets/svg/MyPaperIcon.svg';
import { ReactComponent as EditProfileIcon } from '../assets/svg/EditProfileIcon.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/LogoutIcon.svg';

const UserPage = () => {
  return (
    <div className="w-full">
      <div className="w-full p-[16px]">
        <button className="w-full h-[72px] bg-system-gray-6 rounded-[12px] text-teritary-title flex items-center px-[16px] py-[12px]">
          <DefaultProfileImage />
          <p className="ml-[12px]">로그인</p>
        </button>
      </div>
      <ul className="w-full px-[20px] py-[10px] text-title">
        <button className="flex items-center">
          <MyPaperIcon />
          <p className="ml-[10px]">내 페이퍼</p>
        </button>
        <button className="flex items-center mt-[16px]">
          <EditProfileIcon />

          <p className="ml-[10px]">프로필 수정</p>
        </button>
        <button className="flex items-center mt-[16px]">
          <LogoutIcon />
          <p className="ml-[10px]">로그아웃</p>
        </button>
      </ul>
    </div>
  );
};

export default UserPage;
