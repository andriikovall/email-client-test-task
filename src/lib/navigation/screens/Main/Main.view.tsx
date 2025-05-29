import { connectController } from "../../../utils/connectController";
import { Folders } from "./components";
import { EmailsList } from "./components/EmailsList/EmailsList.view";
// todo: pretty import paths
import { useMainController } from "./Main.controller";

export type MainViewProps = {
  /**
   * If this is provided, we are in the email view and ignoring
   * the folderSlug
   */
  emailId: string | undefined;
  /**
   * If this is provided, we firstly check for the emailId and then
   * the folderSlug. If no emailId is provided, we show the emails list
   * with the placeholder that no email is selected.
   */
  folderSlug: string | undefined;
};

const MainView = (props: MainViewProps) => {
  const { emailId, folderSlug } = props;
  console.log({ emailId, folderSlug });

  return (
    <div className="row h-100">
      <div className="col-3 h-100 overflow-scroll border-end bg-body-tertiary">
        <Folders />
      </div>
      <div className="col-4 h-100 overflow-scroll border-end">
        <EmailsList />
      </div>
      <div className="col-5 h-100 overflow-scroll">
        <p>Email</p>
      </div>
    </div>
  );
};

export const Main = connectController(useMainController, MainView);
