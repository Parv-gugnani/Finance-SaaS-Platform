import { Button } from "@/components/ui/button";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type AccountColumnProps = {
  account: string;
  accountId: string;
};

export const AccountColumn = ({ account, accountId }: AccountColumnProps) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => onOpenAccount(accountId);

  return (
    <Button
      onClick={onClick}
      className="flex cursor-pointer items-center hover:underline"
    >
      {account}
    </Button>
  );
};
