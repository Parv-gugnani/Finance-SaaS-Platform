import { useConfirm } from "@/hooks/use-confirm";

type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this transaction?",
    "You are about to delete this transaction"
  );

  const deleteMutation = useDeleteCategory(id);
  const onOpen = useOpenCategory();
};
