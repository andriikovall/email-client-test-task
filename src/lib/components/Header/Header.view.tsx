import React, { memo } from "react";
import { connectController } from "../../utils/connectController";
import { useHeaderController } from "./Header.controller";

export type HeaderViewProps = Readonly<{
  onAddEmail: () => void;
}>;

export const HeaderView: React.FC<HeaderViewProps> = ({ onAddEmail }) => {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 border-bottom px-4">
      <h1 className="h3 p-0 m-0">Email Client</h1>
      <button className="btn btn-light" onClick={onAddEmail}>
        <i className="bi bi-envelope me-1"></i> Simulate new email
      </button>
    </header>
  );
};

export const Header = memo(connectController(useHeaderController, HeaderView));
