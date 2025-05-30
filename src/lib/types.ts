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
  // to simplify we have the content already in the email object
  content: string;
  isRead: boolean;
  isDeleted: boolean;
  folderSlug: string | undefined;
};

export type Folder = {
  slug: string;
  name: string;
  icon: string;
  count: number;
};
