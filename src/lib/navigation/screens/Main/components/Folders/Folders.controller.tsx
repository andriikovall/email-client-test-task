import type { FoldersViewProps } from "./Folders.view";

export const useFoldersController = (): FoldersViewProps => {
  return {
    folders: [
      {
        slug: "inbox",
        name: "Inbox",
        icon: "📥",
        count: 10,
      },
      {
        slug: "drafts",
        name: "Drafts",
        icon: "📝",
        count: 1,
      },
      {
        slug: "spam",
        name: "Spam",
        icon: "🚧",
        count: 0,
      },
    ],
    loading: false,
  };
};
