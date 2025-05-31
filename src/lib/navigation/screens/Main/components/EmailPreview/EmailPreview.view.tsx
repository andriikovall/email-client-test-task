import type { Email } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { useEmailPreviewController } from "./EmailPreview.controller";

export type EmailPreviewViewProps = {
  email: Email | undefined;
  onMarkAsReadOrUnread: () => void;
  onDelete: () => void;
  loading: boolean;
};

// todo: move each of them to a separate Screen and not the component
const EmailPreviewView = (props: EmailPreviewViewProps) => {
  const { email, onMarkAsReadOrUnread, onDelete, loading } = props;
  console.log("email:", email);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!email) {
    return <div>No email selected</div>;
  }

  return (
    <>
      <h2 className="h4 mt-4">Email Preview</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{email.subject}</h5>
          <p className="card-text">{email.content}</p>
          <p className="card-text">{email.from.name}</p>
          <p className="card-text">{email.from.email}</p>
          <p className="card-text">{email.date}</p>
          <p className="card-text">
            {email.to.map((to) => to.name).join(", ")}
          </p>
          <p className="card-text">{email.isRead ? "Read" : "Unread"}</p>
        </div>
      </div>
    </>
  );
};

export const EmailPreview = connectController(
  useEmailPreviewController,
  EmailPreviewView
);
