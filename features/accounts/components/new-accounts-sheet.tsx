import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const NewAccountSheet = () => {
  return (
    <Sheet open>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new Account to track your Transactions
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
