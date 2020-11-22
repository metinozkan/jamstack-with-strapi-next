export type PostType = {
  id: number;
  title: string;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: string;
};

export type ParamsType = {
  params: {
    post: number;
  };
};
