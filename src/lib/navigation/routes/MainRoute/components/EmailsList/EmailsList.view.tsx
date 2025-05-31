import { memo, Suspense } from "react";
import type { Email } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { EmailItem } from "./components";
import { useEmailsListController } from "./EmailsList.controller";

export type EmailsListViewProps = {
  emails: Email[];
};

const EmailsListView = (props: EmailsListViewProps) => {
  const { emails } = props;

  return (
    <Suspense fallback={<div>Loading emails...</div>}>
      {/* todo: pin title */}
      <h2 className="h4 mt-4">Emails</h2>
      <ul className="list-unstyled d-grid gap-2">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            onReadOrUnread={function (): void {
              // todo: add this to props
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
            selected={false}
          />
        ))}
      </ul>
    </Suspense>
  );
};

export const EmailsList = memo(
  connectController(useEmailsListController, EmailsListView)
);
