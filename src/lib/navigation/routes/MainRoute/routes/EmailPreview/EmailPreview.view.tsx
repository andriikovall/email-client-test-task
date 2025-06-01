import React from "react";
import type { Email } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { useEmailPreviewController } from "./EmailPreview.controller";
import { LoadingOverlay } from "../../../../../components/LoadingOverlay";

export type EmailPreviewViewProps = Readonly<{
  email: Email | undefined;
  onMarkAsReadOrUnread: () => void;
  onDelete: () => void;
  sanitizedEmailHTML: string;
  loading: boolean;
}>;

const EmailPreviewView: React.FC<EmailPreviewViewProps> = ({ 
  email, 
  onDelete, 
  onMarkAsReadOrUnread, 
  sanitizedEmailHTML,
  loading,
}) => {
  if (!email) {
    return <div className="text-center mt-4">No email selected</div>;
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
      <LoadingOverlay loading={loading} />
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0 card-title me-2">{email.subject}</h2>
          <div className="btn-group col-4">
            <button 
              className="btn btn-light"
              onClick={onMarkAsReadOrUnread}
            >
              {email.isRead ? '📕 Unread' : '📖 Read'}
            </button>
            <button 
              className="btn btn-light"
              onClick={onDelete}
            >
              ❌ Delete
            </button>
          </div>
        </div>
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
