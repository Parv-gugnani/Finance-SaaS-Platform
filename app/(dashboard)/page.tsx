"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen} className="my-14">
        Add an account
      </Button>
    </div>
  );
}
