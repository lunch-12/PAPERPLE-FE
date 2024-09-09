export interface MyPaperDTO {
  paperId: number;
  content: string;
  view: number; // UI에 안 쓰임
  image: string | null;
  createdAt: string;
  isEdited: boolean;
  likeNum: number;
  newspaper: NewspaperInPaperDTO | null;
}

export interface NewspaperInPaperDTO {
  title: string;
  link: string;
  image: string;
  summaries: string[];
  tags: string[];
  date: string;
  sector: string;
  publishedAt: string;
  createdAt: string;
  likeNum: number;
}
