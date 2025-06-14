import React, { memo } from "react";
import type { Email } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { EmailItem } from "./components";
import { useEmailsListController } from "./EmailsList.controller";

export type EmailsListViewProps = Readonly<{
  emails: Email[];
  onReadOrUnread: (email: Email) => Promise<void>;
  onDelete: (email: Email) => Promise<void>;
}>;

const EmailsListView: React.FC<EmailsListViewProps> = ({
  emails,
  onReadOrUnread,
  onDelete,
}) => {
  if (!emails.length) {
    return <div className="text-center p-4">No emails in this folder</div>;
  }

  return (
    <>
      <h2 className="h4 mt-4">Emails</h2>
      <ul className="list-unstyled d-grid gap-2">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            onReadOrUnread={() => onReadOrUnread(email)}
            onDelete={() => onDelete(email)}
          />
        ))}
      </ul>
    </>
  );
};

export const EmailsList = memo(
  connectController(useEmailsListController, EmailsListView)
);
