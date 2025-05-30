import type { Folder } from "../../types";

export const MOCK_FOLDERS: Omit<Folder, "count">[] = [
  {
    slug: "inbox",
    name: "Inbox",
    icon: "📥",
  },
  {
    slug: "spam",
    name: "Spam",
    icon: "🚧",
  },
  {
    slug: "drafts",
    name: "Drafts",
    icon: "📝",
  },
];
