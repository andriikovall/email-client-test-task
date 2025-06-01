import React from "react";
import { NavLink } from "react-router";
import type { Email } from "../../../../../../../types";
import clsx from "clsx";
import { Dropdown } from "../../../../../../../components";
import "./EmailItem.styles.css";
import { connectController } from "../../../../../../../utils/connectController";
import { useEmailItemController } from "./EmailItem.controller";

export type EmailItemViewProps = Readonly<{
  email: Email;
  onReadOrUnread: () => void;
  onDelete: () => void;
  loading: boolean;
}>;

const EmailItemView: React.FC<EmailItemViewProps> = ({
  email,
  onDelete,
  onReadOrUnread,
  loading,
}) => {
  const date = new Date(email.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const from = email.from.name
    ? `${email.from.name} <${email.from.email}>`
    : email.from.email;

  return (
    <NavLink
      to={`email/${email.id}`}
      className={({ isActive }) =>
        clsx("card btn btn-light text-start email-item p-0", {
          "bg-secondary bg-opacity-25": isActive,
          "bg-primary bg-opacity-10": !email.isRead,
        })
      }
      viewTransition
    >
      {loading ? (
        <div className="position-absolute w-100 h-100 justify-content-center align-items-center d-flex bg-light bg-opacity-50">
          <div className="spinner-grow" />
        </div>
      ) : null}
      {!email.isRead ? <div className="unread-indicator" /> : null}
      <div className="card-body p-3">
        <div className="d-flex justify-content-between">
          <h3 className="card-title h5">{email.subject}</h3>
          <Dropdown
            items={[
              {
                label: email.isRead ? "Unread" : "Read",
                onClick: onReadOrUnread,
              },
              {
                label: "Delete",
                onClick: onDelete,
              },
            ]}
          />
        </div>
        <div className="card-text">
          <p className="mb-1">
            <strong>From:</strong> {from}
          </p>
          <p className="mb-1">
            <strong>Date:</strong> {date}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export const EmailItem = connectController(
  useEmailItemController,
  EmailItemView
);
