import { EmailsService } from "../../services/emails.service";
import { useCallback } from "react";
import type { HeaderViewProps } from "./Header.view";


export const useHeaderController = (): HeaderViewProps => {
  const addEmail = useCallback(() => {
    EmailsService.addMockEmail();
  }, []);

  return {
    onAddEmail: addEmail,
  };
};
