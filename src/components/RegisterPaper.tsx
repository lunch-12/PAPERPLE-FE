import { useState } from 'react';

const RegisterPaper = () => {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

  const handleSubmit = () => {
    console.log('URL:', url);
    console.log('Content:', content);
    console.log('Tags:', tagList);
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tags.trim() !== '') {
      setTagList([...tagList, tags.trim()]);
      setTags('');
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        className="ttop-[64px] left-[calc(100%-390px+16px)] rounded-[12px] flex flex-col justify-start items-center px-0 py-[10px] overflow-hidden border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">

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
          <div
            className="flex-shrink-0 self-stretch flex flex-col justify-center items-start gap-y-[8px] gap-x-[8px] overflow-hidden">
            <div
              className="flex-shrink-0 text-[#444444] whitespace-nowrap text-[14px] leading-[19px] font-semibold flex items-center">뉴스
              URL
            </div>
            <div
              className="flex-shrink-0 self-stretch rounded-[4px] flex flex-col justify-center items-start px-[8px] py-[4px] overflow-hidden border-[1px] border-[solid] border-[rgba(0,0,0,0.12)]">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://newspaper.co.kr/content"
                className="w-full flex-shrink-0 text-[#B3B3B3] text-[12px] leading-[16px] font-medium flex items-center"
              />
            </div>
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
                className="w-full h-[282px] flex-shrink-0 self-stretch text-[#B3B3B3] text-[12px] leading-[16px] font-medium"
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
                className="w-full flex-shrink-0 self-stretch text-[#B3B3B3] text-[12px] leading-[16px] font-medium"
              />
            </div>

            {/* Tags */}
            <div
              className="ww-[326px] h-[32px] rounded-[4px] flex flex-row items-center gap-x-[8px] gap-y-0 px-0 py-[4px] overflow-hidden">
              {tagList.map((tag, index) => (
                <div key={index}
                     className="w-[141px] h-[24px] rounded-[4px] flex flex-row items-center gap-x-[4px] gap-y-0 px-[8px] py-[4px] overflow-hidden bg-[#F2F2F7]">
                  <span
                    className="absolute top-[-0.03rem] left-0 w-2.5 h-3 text-[#B3B3B3] whitespace-nowrap text-[0.50rem] leading-[0.69rem] font-medium flex items-center justify-center text-center">{tag}</span>
                  <span className="text-xs text-gray-500 hover:text-red-500">❌</span>
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
            <span className="flex-shrink-0 text-[#FFFFFF] whitespace-nowrap text-[14px] leading-[19px] font-semibold flex items-center">등록하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPaper;
