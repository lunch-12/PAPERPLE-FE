interface NewsContentProps {
  title: string;
  summaries: string[];
}

const NewsContent = ({ title, summaries }: NewsContentProps) => {
  return (
    <article>
      <p className="text-[#26262C] font-semibold">{title}</p>
      <ul className="mt-[16px] text-[#444444] text-[12px]">
        {summaries.map(summary => (
          <li key={summary}>{'- ' + summary}</li>
        ))}
      </ul>
      <img
        className="w-full h-[150px] mt-[16px] bg-cover bg-center bg-no-repeat rounded-[16px]"
        src={
          'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg'
        }
        alt="기사의 대표 이미지"
      />
    </article>
  );
};

export default NewsContent;
