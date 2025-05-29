import { NavLink } from "react-router";
import type { Folder } from "../../../../../types";
import { connectController } from "../../../../../utils/connectController";
import { useFoldersController } from "./Folders.controller";

export type FoldersViewProps = {
  folders: Folder[];
  loading: boolean;
};

const FoldersView = (props: FoldersViewProps) => {
  const { folders, loading } = props;

  if (loading) {
    return (
      <>
        <h2 className="h4 mb-3">Folders</h2>
        <div className="text-center p-4">Loading folders...</div>
      </>
    );
  }

  return (
    <div className="p-4">
      <h2 className="h4 mb-3">Folders</h2>
      <ul className="list-unstyled d-grid gap-2">
        {folders.map((folder) => (
          <NavLink
            key={folder.slug}
            className="mb-1 btn btn-light"
            to={`/folders/${folder.slug}`}
          >
            <div className="d-flex align-items-center">
              <span className="me-2">{folder.icon}</span>
              <span>{folder.name}</span>
              {folder.count ? (
                <span className="ms-auto badge bg-secondary">
                  {folder.count}
                </span>
              ) : null}
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export const Folders = connectController(useFoldersController, FoldersView);
