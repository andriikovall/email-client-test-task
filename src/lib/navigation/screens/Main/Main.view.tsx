export type MainViewProps = {
  /**
   * If this is provided, we are in the email view and ignoring
   * the folderSlug
   */
  emailId: string | null;
  /**
   * If this is provided, we firstly check for the emailId and then
   * the folderSlug. If no emailId is provided, we show the emails list
   * with the placeholder that no email is selected.
   */
  folderSlug: string | null;
};

export const MainView = (props: MainViewProps) => {
  const { emailId, folderSlug } = props;
  console.log('emailId, folderSlug:', emailId, folderSlug);

  return (
    <div className="row h-100">
      <div className="col-2 h-100 overflow-scroll border-end"></div>
      <div className="col-5 h-100 overflow-scroll border-end">
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
        <p>Emails</p>
      </div>
      <div className="col-5 h-100 overflow-scroll">
        <p>Email</p>
      </div>
    </div>
  );
};