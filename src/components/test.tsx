// src/pages/test.tsx

import React, { useState } from 'react';

const TestPage = () => {
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
    <div className="absolute opacity-100 bg-white">
      <div className="absolute opacity-100 flex flex-col items-center box-border">
        {/* Title Section */}
        <div className="w-full h-[65px] flex flex-col justify-center p-[10px] px-[16px] gap-[4px]">
          <h2 className="text-[18px] font-semibold text-[#1E1E1E]">
            페이퍼 등록하기
          </h2>
          <p className="text-[12px] font-medium text-[#5A5A5A]">
            뉴스를 등록하고 다른 사람과 이야기를 나눠보아요
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
