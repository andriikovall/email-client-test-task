import { useState } from "react";
import type { Email } from "../../../../../../../types";
import type { EmailItemViewProps } from "./EmailItem.view";
import { useEventCallback } from "../../../../../../../utils/useEventCallback";

type EmailItemControllerProps = Readonly<{
  email: Email;
  onReadOrUnread: () => Promise<void>;
  onDelete: () => Promise<void>;
}>;

export const useEmailItemController = (
  props: EmailItemControllerProps
): EmailItemViewProps => {
  const [loading, setLoading] = useState(false);

  const onReadOrUnreadCallback = useEventCallback(async () => {
    setLoading(true);
    try {
      await props.onReadOrUnread();
    } finally {
      setLoading(false);
    }
  });

  const onDeleteCallback = useEventCallback(async () => {
    setLoading(true);
    try {
      await props.onDelete();
    } finally {
      setLoading(false);
    }
  });

  return {
    email: props.email,
    onReadOrUnread: onReadOrUnreadCallback,
    onDelete: onDeleteCallback,
    loading,
  };
};
