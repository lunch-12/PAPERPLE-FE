import { useState, useEffect } from 'react';

enum UrlStatus {
  Idle = 'idle',
  Loading = 'loading',
  Valid = 'valid',
  Invalid = 'invalid',
}

// Todo- tryToExit 이벤트 처리
enum ModalType {
  None = 'none',
  TryToExit = 'tryToExit',
  Loading = 'loading',
  InvalidURL = 'invalidURL',
}

interface Paper {
  url: string;
  content: string;
  tags: string[];
}

interface RegisterPaperProps {
  isEditing?: boolean;
  existingPaper?: Paper | null;
}

const RegisterPaper = ({ isEditing = false, existingPaper = null }: RegisterPaperProps) => {
  const [url, setUrl] = useState('');
  const [urlStatus, setUrlStatus] = useState<UrlStatus>(UrlStatus.Loading);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [modalType, setModalType] = useState<ModalType>(ModalType.None);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (isEditing && existingPaper !== null) {
      // 기존 페이퍼 데이터를 로드
      setUrl(existingPaper.url);
      setContent(existingPaper.content);
      setTagList(existingPaper.tags);
    }
  }, [isEditing, existingPaper]);


  const handleSubmit = () => {
    if (urlStatus === UrlStatus.Loading) {
      setModalType(ModalType.Loading);
      return;
    }

    if (urlStatus === UrlStatus.Invalid) {
      setModalType(ModalType.InvalidURL);
      return;
    }

    if (isEditing) {
      // 수정 API 호출
      console.log('수정 중:', { url, content, tags: tagList });
      // updatePaper({ url, content, tags: tagList });
    } else {
      // 등록 API 호출
      console.log('등록 중:', { url, content, tags: tagList });
      // createPaper({ url, content, tags: tagList });
    }

    console.log('URL:', url);
    console.log('Content:', content);
    console.log('Tags:', tagList);
  };

  const closeModal = () => {
    setModalType(ModalType.None);
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tags.trim() !== '') {
      setTagList([...tagList, tags.trim()]);
      setTags('');
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* 모달 1: 페이지 벗어날 때 경고 */}
      {modalType === ModalType.TryToExit && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 px-[64px]">
          <div
            className=" rounded-[8px] w-[262px] h-[106px] flex flex-col gap-y-[12px] gap-x-[12px] p-[16px] overflow-hidden bg-[#FFFFFF] border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
            <h2
              className="flex-shrink-0 text-[#3D3D3D] whitespace-nowrap text-[12px] leading-[16px] font-semibold flex items-center">이야기가
              저장되지 않습니다</h2>
            <p
              className="flex-shrink-0 text-[#5A5A5A] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center">
              페이지를 벗어나면 작성 중인 이야기가 사라질 수 있어요
            </p>
            <div
              className="flex-shrink-0 self-stretch justify-end flex flex-row items-center gap-x-[4px] gap-y-0 pl-0 pr-0 py-[4px]">
              <button
                onClick={closeModal}
                className="flex-shrink-0 rounded-[4px] flex flex-col justify-end items-end px-[8px] py-[4px] border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]"
              >
                <span
                  className="flex-shrink-0 text-[#444444] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center">나가기</span>
              </button>
              <button
                onClick={closeModal}
                className="flex-shrink-0 rounded-[4px] flex flex-col justify-end items-end px-[8px] py-[4px] bg-[#1E1E1E]"
              >
                <span
                  className="flex-shrink-0 text-[#FFFFFF] whitespace-nowrap text-[8px] leading-[11px] font-semibold flex items-center">계속 작성하기</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 모달 2: URL 로딩 중 */}
      {modalType === ModalType.Loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 px-[64px]">
          <div
            className=" rounded-[8px] w-[262px] h-[106px] flex flex-col gap-y-[12px] gap-x-[12px] p-[16px] overflow-hidden bg-[#FFFFFF] border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
            <h2
              className="flex-shrink-0 text-[#3D3D3D] whitespace-nowrap text-[12px] leading-[16px] font-semibold flex items-center">뉴스 내용을 요약하고 있는 중입니다</h2>
            <p
              className="flex-shrink-0 text-[#5A5A5A] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center">
              이야기만 등록하시겠습니까?
            </p>
            <div
              className="flex-shrink-0 self-stretch justify-end flex flex-row items-center gap-x-[4px] gap-y-0 pl-0 pr-0 py-[4px]">
              <button
                onClick={closeModal}
                className="flex-shrink-0 rounded-[4px] flex flex-col justify-center px-[8px] py-[4px] bg-[#E5E5EA]"
              >
                <span
                  className="flex-shrink-0 text-[#444444] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center">요약 기다려보기</span>
              </button>
              <button
                onClick={closeModal}
                className="flex-shrink-0 rounded-[4px] flex flex-col justify-end items-end px-[8px] py-[4px] bg-[#1E1E1E]"
              >
                <span
                  className="flex-shrink-0 text-[#FFFFFF] whitespace-nowrap text-[8px] leading-[11px] font-semibold flex items-center">등록하기</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 모달 3: 유효하지 않은 URL */}
      {modalType === ModalType.InvalidURL && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 px-[64px]">
          <div
            className=" rounded-[8px] w-[262px] h-[106px] flex flex-col gap-y-[12px] gap-x-[12px] p-[16px] overflow-hidden bg-[#FFFFFF] border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
            <h2
              className="flex-shrink-0 text-[#3D3D3D] whitespace-nowrap text-[12px] leading-[16px] font-semibold flex items-center">올바르지 않은 URL입니다</h2>
            <p
              className="flex-shrink-0 text-[#5A5A5A] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center">
              입력하신 뉴스 URL을 다시 한 번 확인해주세요
            </p>
            <div
              className="flex-shrink-0 self-stretch justify-end flex flex-row items-center gap-x-[4px] gap-y-0 pl-0 pr-0 py-[4px]">
              <button
                onClick={closeModal}
                className="flex-shrink-0 rounded-[4px] flex flex-col justify-center px-[8px] py-[4px] bg-[#E5E5EA]"
              >
                <span
                  className="flex-shrink-0 text-[#444444] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center">다시 시도하기</span>
              </button>
              <button
                onClick={closeModal}
                className="flex-shrink-0 rounded-[4px] flex flex-col justify-end items-end px-[8px] py-[4px] bg-[#1E1E1E]"
              >
                <span
                  className="flex-shrink-0 text-[#FFFFFF] whitespace-nowrap text-[8px] leading-[11px] font-semibold flex items-center">이야기만 등록하기</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className="top-[64px] left-[calc(100%-390px+16px)] rounded-[12px] flex flex-col justify-start items-center px-0 py-[10px] overflow-hidden border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">

        {/* Title Section */}
        <div
          className="flex-shrink-0 self-stretch flex flex-col justify-center items-start gap-y-[4px] gap-x-[4px] p-[16px] py-[10px] overflow-hidden">
          <h2
            className="flex-shrink-0 text-[#1E1E1E] whitespace-nowrap text-[18px] leading-[25px] font-semibold flex items-center">페이퍼
            등록하기</h2>
          <p
            className="flex-shrink-0 text-[#5A5A5A] whitespace-nowrap text-[12px] leading-[16px] font-medium flex items-center">뉴스를
            등록하고 다른 사람과 이야기를 나눠보아요</p>
        </div>

        {/* Input Section */}
        <div
          className="flex-shrink-0 self-stretch flex flex-col justify-start items-start gap-y-[16px] gap-x-[16px] px-[16px] py-[10px] overflow-hidden">

          {/* URL Textfield */}
          <div className="flex-shrink-0 self-stretch flex flex-col justify-center items-start gap-y-[8px] gap-x-[8px] overflow-hidden">
            <div className="flex-shrink-0 flex flex-row justify-between items-center w-full">
              <span className="text-[#444444] whitespace-nowrap text-[14px] leading-[19px] font-semibold">
                뉴스 URL
              </span>
              {/* URL 상태 메시지 */}
              <div className="flex-shrink-0 flex flex-row justify-center items-center gap-y-0 px-0 py-[3px] overflow-hidden">
                {urlStatus === UrlStatus.Loading && (
                  <div className="flex-shrink-0 flex flex-row justify-end items-end">
                    <div className="w-[14px] h-[14px] relative">
                      <img
                        // To-do: 이미지 URL을 변경하세요.
                        src="https://image-resource.creatie.ai/135366163293663/135366179022307/f35ed7a9d768ed64c3166075fb683bbe.png"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Loading icon"
                      />
                    </div>
                    <span className="flex-shrink-0 text-[#B3B3B3] whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
                      정보를 가져오는 중입니다
                    </span>
                  </div>
                )}
                {urlStatus === UrlStatus.Valid && (
                  <div className="flex-shrink-0 flex flex-row justify-end items-end">
                    <div className="w-[14px] h-[14px] relative">
                      <img
                        src="https://image-resource.creatie.ai/135366163293663/135366179022307/f35ed7a9d768ed64c3166075fb683bbe.png"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Valid icon"
                      />
                    </div>
                    <span className="flex-shrink-0 text-[#AC96D9] whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
                      유효한 URL입니다
                    </span>
                  </div>
                )}
                {urlStatus === UrlStatus.Invalid && (
                  <div className="flex-shrink-0 flex flex-row justify-end items-end overflow-hidden py-[3px]">
                    <div className="w-[14px] h-[14px] relative">
                      <img
                        src="https://image-resource.creatie.ai/135366163293663/135366179022307/722dc7a1c85a7cd79886c0522a954a38.png"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Invalid icon"
                      />
                    </div>
                    <span className="flex-shrink-0 text-[#B3261E] whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
                      URL을 다시 한번 확인해주세요
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 self-stretch rounded-[4px] flex flex-col justify-center items-start px-[8px] py-[4px] overflow-hidden border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://newspaper.co.kr/content"
              className="w-full flex-shrink-0 text-[#1E1E1E] text-[12px] leading-[16px] font-medium flex items-center"
            />
          </div>

          {/* Text Textfield */}
          <div
            className="flex-shrink-0 self-stretch flex flex-col justify-center items-start gap-y-[8px] gap-x-[8px] overflow-hidden">
            <div
              className="w-full flex-shrink-0 text-[#444444] whitespace-nowrap text-[14px] leading-[19px] font-semibold flex items-center">
              이야기 <span className="text-[#D93744]">*</span>
            </div>
            <div
              className="flex-shrink-0 self-stretch rounded-[4px] flex flex-col justify-center items-start px-[8px] py-[4px] overflow-hidden border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="나누고 싶은 이야기를 적어주세요"
                className="w-full flex-shrink-0 self-stretch h-[282px] text-[#1E1E1E] text-[12px] leading-[16px] font-medium"
                maxLength={1000}
              ></textarea>
            </div>
          </div>

          {/* Tag Textfield */}
          <div
            className="flex-shrink-0 self-stretch flex flex-col justify-center gap-y-[8px] gap-x-[8px] overflow-hidden">
            <div
              className="flex-shrink-0 text-[#444444] whitespace-nowrap text-[14px] leading-[19px] font-semibold flex items-center">태그
            </div>
            <div
              className="flex-shrink-0 self-stretch rounded-[4px] flex flex-col justify-center px-[8px] py-[4px] overflow-hidden border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                onKeyPress={handleTagKeyPress}
                placeholder="#오늘점심뭐먹지"
                className="w-full flex-shrink-0 text-[#444444] whitespace-nowrap text-[12px] leading-[16px] font-medium"
              />
            </div>

            {/* Tags */}
            <div
              className="flex-shrink-0 self-stretch rounded-[4px] flex flex-row flex-wrap justify-start items-center gap-x-[8px] gap-y-[4px] px-0 py-[4px] overflow-hidden">
              {tagList.map((tag, index) => (
                <div key={index} className="flex-shrink-0 rounded-[4px] flex flex-row justify-start items-center gap-x-[4px] px-[8px] py-[4px] overflow-hidden bg-[#F2F2F7]">
                  <span className="flex-shrink-0 w-auto h-[16px] text-[#5A5A5A] whitespace-nowrap text-[12px] leading-[16px] font-medium">{tag}</span>
                  <span className="flex-shrink-0 text-[#B3B3B3] whitespace-nowrap text-[8px] leading-[11px] font-medium flex items-center justify-center text-center">❌</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="flex-shrink-0 self-stretch flex justify-end items-end px-[16px] py-[10px] overflow-hidden">
          <button
            onClick={handleSubmit}
            className="flex-shrink-0 rounded-[12px] flex flex-col justify-center items-end px-[16px] py-[8px] bg-[rgba(191,_69,_136,_0.8)]"
          >
            <span
              className="flex-shrink-0 text-[#FFFFFF] whitespace-nowrap text-[14px] leading-[19px] font-semibold flex items-center">{isEditing ? '수정' : '등록하기'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPaper;