import React from 'react';
import { UrlStatus } from '../types/enums';

interface URLStatusIndicatorProps {
  urlStatus: UrlStatus;
}

// 이름이 생각이 안나서 chatgpt의 도움을 받았는데 괜찮은 이름 있을까요?
const URLStatusIndicator = ({ urlStatus }: URLStatusIndicatorProps) => {
  return (
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
          <span className="flex-shrink-0 text-system-disabled whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
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
          <span className="flex-shrink-0 text-main-4 whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
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
          <span className="flex-shrink-0 text-system-error whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
            URL을 다시 한번 확인해주세요
          </span>
        </div>
      )}
      {urlStatus === UrlStatus.Unavailable && (
        <div className="flex-shrink-0 flex flex-row justify-end items-end overflow-hidden py-[3px]">
          <div className="w-[14px] h-[14px] relative">
            <img
              src="https://image-resource.creatie.ai/135366163293663/135366179022307/722dc7a1c85a7cd79886c0522a954a38.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Invalid icon"
            />
          </div>
          <span className="flex-shrink-0 text-system-error whitespace-nowrap text-[10px] leading-[14px] font-semibold flex items-center">
            해당 플랫폼은 정보를 가져올 수 없습니다
          </span>
        </div>
      )}
    </div>
  );
};

export default URLStatusIndicator;
