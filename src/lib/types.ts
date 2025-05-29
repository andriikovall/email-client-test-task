export type Email = {
  id: string;
  date: string;
  from: {
    name: string;
    email: string;
  };
  to: {
    name: string;
    email: string;
  }[];
  subject: string;
  content: string;
  isRead: boolean;
  isDeleted: boolean;
  folderSlug?: string;
};

export type Folder = {
  slug: string;
  name: string;
  icon: string;
};
