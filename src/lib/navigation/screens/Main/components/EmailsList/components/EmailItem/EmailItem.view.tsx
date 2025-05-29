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
    email: { id, subject, from, to, date, isRead, isDeleted, content },
    onReadOrUnread,
    onDelete,
    selected,
  } = props;

  return (
    <NavLink
      to={`email/${id}`}
      className={({ isActive }) =>
        clsx("text-decoration-none", { "text-primary": isActive })
      }
    >
      <div
        className={clsx("card btn btn-light text-start", {
          "bg-body-secondary": selected,
          "bg-primary bg-opacity-10": !isRead,
        })}
      >
        {!isRead ? (
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
          <h3 className="card-title h5">{subject}</h3>
          <div className="card-text">
            <p className="mb-1">
              <strong>From:</strong> {from.name} &lt;{from.email}&gt;
            </p>
            <p className="mb-1">
              <strong>Date:</strong> {date}
            </p>
          </div>
          {/* todo: context menu */}
        </div>
      </div>
    </NavLink>
  );
};

export const EmailItem = EmailItemView;
