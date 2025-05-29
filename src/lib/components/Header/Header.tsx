type HeaderProps = {
  onAddEmail: () => void;
};

export const Header = ({ onAddEmail }: HeaderProps) => {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 border-bottom px-4">
      <h1 className="h3 p-0 m-0">Email Client</h1>
      <button className="btn btn-outline-primary" onClick={onAddEmail}>
        + Simulate new email
      </button>
    </header>
  );
};
