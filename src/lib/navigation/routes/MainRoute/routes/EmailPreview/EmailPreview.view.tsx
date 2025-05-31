import type { Email } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { useEmailPreviewController } from "./EmailPreview.controller";

export type EmailPreviewViewProps = {
  email: Email | undefined;
  onMarkAsReadOrUnread: () => void;
  onDelete: () => void;
  sanitizedEmailHTML: string;
};

const EmailPreviewView = (props: EmailPreviewViewProps) => {
  const { email, sanitizedEmailHTML } = props;

  if (!email) {
    return <div className="mt-4">No email selected</div>;
  }

  const from = email.from.name ? `${email.from.name} <${email.from.email}>` : email.from.email;
  const to = email.to.map((to) => `${to.name} <${to.email}>`).join(", ");
  const date = new Date(email.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="card border-0">
      <div className="card-body p-4">
        <h2 className="h4 card-title mb-3">{email.subject}</h2>
        <div className="card-text mb-4 text-muted small border-bottom pb-2">
          <div className="mb-2">
            <span className="fw-semibold">From:</span> {from}
          </div>
          <div className="mb-2">
            <span className="fw-semibold">To:</span> {to}
          </div>
          <div>
            <span className="fw-semibold">Date:</span> {date}
          </div>
        </div>
        <div
          className="card-text email-content"
          dangerouslySetInnerHTML={{ __html: sanitizedEmailHTML }}
        />
      </div>
    </div>
  );
};

export const EmailPreview = connectController(
  useEmailPreviewController,
  EmailPreviewView
);
