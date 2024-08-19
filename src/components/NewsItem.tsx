import NewsContent from './NewsContent';
import NewsFooter from './NewsFooter';
import NewsHeader from './NewsHeader';

interface NewsItemProps {
  isShowHeader?: boolean;
  isHotArticleBanner: boolean;
  sector: string;
  title: string;
  summaries: string[];
  tags: string[];
  publishedAt: string;
  createdAt: string;
  likeNum: number;
}

const NewsItem = ({
  isShowHeader = true,
  isHotArticleBanner,
  sector,
  title,
  summaries,
  tags,
  publishedAt,
  createdAt,
  likeNum,
}: NewsItemProps) => {
  return (
    <div className="w-full">
      {isShowHeader && (
        <NewsHeader isHotArticleBanner={isHotArticleBanner} sector={sector} />
      )}
      <NewsContent title={title} summaries={summaries} />
      <NewsFooter
        tags={tags}
        publishedAt={publishedAt}
        createdAt={createdAt}
        likeNum={likeNum}
      />
    </div>
  );
};

export default NewsItem;
