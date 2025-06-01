export type LoadingOverlayProps = Readonly<{
  loading: boolean;
}>;

const LoadingOverlayView: React.FC<LoadingOverlayProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="position-absolute w-100 h-100 justify-content-center align-items-center d-flex bg-light bg-opacity-50">
      <div className="spinner-grow" />
    </div>
  );
};

export const LoadingOverlay = LoadingOverlayView;