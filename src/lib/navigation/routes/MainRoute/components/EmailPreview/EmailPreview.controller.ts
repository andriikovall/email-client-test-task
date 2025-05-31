import { useParams } from "react-router";
import type { EmailPreviewViewProps } from "./EmailPreview.view";

export const useEmailPreviewController = (): EmailPreviewViewProps => {
  const { emailId } = useParams();

  if (!emailId) {
    return {
      loading: false,
      email: undefined,
      onMarkAsReadOrUnread: () => {
        // todo: add this to props
        throw new Error("Function not implemented.");
      },
      onDelete: () => {
        // todo: add this to props
        throw new Error("Function not implemented.");
      },
    };
  }

  return {
    loading: false,
    email: {
      id: "1",
      subject: "Test email",
      content: "This is a test email",
      from: {
        name: "Test User",
        email: "test@test.com",
      },
      date: "2021-01-01",
      to: [{ name: "Test User", email: "test@test.com" }],
      isRead: false,
      isDeleted: false,
      folderSlug: "inbox",
    },
    onMarkAsReadOrUnread: () => {
      // todo: add this to props
      throw new Error("Function not implemented.");
    },
    onDelete: () => {
      // todo: add this to props
      throw new Error("Function not implemented.");
    },
  };
};
