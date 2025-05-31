import { memo } from "react";
import type { Email } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { EmailItem } from "./components";
import { useEmailsListController } from "./EmailsList.controller";

export type EmailsListViewProps = {
  emails: Email[];
  onReadOrUnread: (email: Email) => void;
  onDelete: (email: Email) => void;
};

const EmailsListView = (props: EmailsListViewProps) => {
  const { emails, onReadOrUnread, onDelete } = props;

  if (!emails.length) {
    return <div className="text-center p-4">No emails in this folder</div>;
  }

  return (
    <>
      {/* todo: pin title */}
      <h2 className="h4 mt-4">Emails</h2>
      <ul className="list-unstyled d-grid gap-2">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            onReadOrUnread={() => onReadOrUnread(email)}
            onDelete={() => onDelete(email)}
            selected={false}
          />
        ))}
      </ul>
    </>
  );
};

export const EmailsList = memo(
  connectController(useEmailsListController, EmailsListView)
);
