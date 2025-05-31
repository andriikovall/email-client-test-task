import { NavLink } from "react-router";
import type { Email } from "../../../../../../../types";
import clsx from "clsx";

type EmailItemViewProps = {
  email: Email;
  onReadOrUnread: () => void;
  onDelete: () => void;
  //   todo: call onReadOrUnread each time the email is selected
  selected: boolean;
};

const EmailItemView = (props: EmailItemViewProps) => {
  const {
    email,
  } = props;

  const date = new Date(email.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const from = email.from.name ? `${email.from.name} <${email.from.email}>` : email.from.email;

  return (
    <NavLink
      to={`email/${email.id}`}
      className={({ isActive }) =>
        clsx("card btn btn-light text-start", { 
            "bg-secondary bg-opacity-25": isActive,
            "bg-primary bg-opacity-10": !email.isRead,
        })
      }
      viewTransition
    >
        {!email.isRead ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "100%",
              backgroundColor: "var(--bs-primary)",
            }}
          />
        ) : null}
        <div className="card-body p-2">
          <h3 className="card-title h5">{email.subject}</h3>
          <div className="card-text">
            <p className="mb-1">
              <strong>From:</strong> {from}
            </p>
            <p className="mb-1">
              <strong>Date:</strong> {date}
            </p>
          </div>
          {/* todo: context menu */}
        </div>
    </NavLink>
  );
};

export const EmailItem = EmailItemView;
