import React, { useId } from "react";

// not passing any `open` props just for simplicity
export type DropdownViewProps = Readonly<{
  items: {
    label: string;
    onClick: () => void;
  }[];
}>;

const DropdownView: React.FC<DropdownViewProps> = ({ items }) => {
  const id = useId();

  return (
    <div className="dropdown">
      <button
        className="btn btn-light"
        type="button"
        id={id}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby={id}>
        {items.map((item) => (
          <li key={item.label}>
            <button className="dropdown-item" onClick={item.onClick}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Dropdown = DropdownView;