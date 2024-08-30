import { useEffect } from 'react';
import KakaoLoginIcon from '../assets/png/KakaoLoginIcon.png';
import { ReactComponent as LogoIcon } from '../assets/svg/LogoIcon.svg';
import useAuthStore from '../stores/useAuthStore';
import axios from 'axios';

const LoginModal = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const login = useAuthStore(state => state.login);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user', {
          withCredentials: true,
        });

        login(response.data.nickname, response.data.profileImage);
      } catch (error) {
        console.error('로그인 상태 확인 실패:', error);
      }
    };

    checkLoginStatus();

    if (!isLoggedIn) {
      document.body.style.overflow = 'hidden'; // 모달이 열릴 때 스크롤 비활성화
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

  return (
    <div>
      {!isLoggedIn && (
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
      )}
    </div>
  );
};

export default LoginModal;
