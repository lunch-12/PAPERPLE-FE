import { useEffect } from 'react';
import KakaoLoginIcon from '../assets/png/KakaoLoginIcon.png';
import { ReactComponent as LogoIcon } from '../assets/svg/LogoIcon.svg';
import useAuthStore from '../stores/useAuthStore';
import axios from 'axios';
import { UserDTO } from '../types/dto/user/UserDTO';

const LoginModal = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const login = useAuthStore(state => state.login);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user', {
          withCredentials: true,
        });

        const userInfo: UserDTO = response.data;
        login(userInfo.nickname, userInfo.profileImage);
      } catch (error) {
        console.error('User API 요청 실패:', error);
      }
    };

    if (!isLoggedIn) {
      checkLoginStatus();
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoggedIn, login]);

  const handleLogin = async () => {
    try {
      window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return isLoggedIn ? null : (
    <div className="fixed inset-0 z-10">
      <div className="absolute inset-0 bg-system-white opacity-50"></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="max-w-sm bg-system-white border border-line-1 px-[30px] py-[36px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] rounded-[8px] flex flex-col items-center justify-center">
          <LogoIcon width={145} height={35} fill="#1E1E1E" />
          <p className="mt-[24px] text-center">
            간편하게 로그인하고
            <br /> 다른 사람들과 이야기를 나눠보세요
          </p>
          <button className="mt-[40px]" onClick={handleLogin}>
            <img src={KakaoLoginIcon} alt="Kakao Login" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
