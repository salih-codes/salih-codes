export type BlogPost = {
  id: string;
  title: string;
  intro: string;
  publishedAt: Date;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
};
