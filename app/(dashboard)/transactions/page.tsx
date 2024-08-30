import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { transactions } from "@/db/schema";
import { useCreateTransactions } from "@/features/transactions/api/use-create-transactions";
import { useDeleteTransaction } from "@/features/transactions/api/use-delete.transaction";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import useSelectAccountAndConfirmTransaction from "@/features/transactions/hooks/use-select-account";
import { Divide, Loader2, Plus } from "lucide-react";
import { useState } from "react";
import ImportCard from "./import-card";
import { useBulkDeleteAccounts } from "@/features/accounts/api/use-bulk-delete";

enum VARIANT {
  LIST = "LIST",
  IMPORT = "IMPORT",
}

const INITIAL_IMPORT_VALUE = {
  data: [],
  error: [],
  meta: {},
};
export default function TransactionPage() {
  const [AccountModal, confirm] = useSelectAccountAndConfirmTransaction();
  const [variant, setVariant] = useState<VARIANT>(VARIANT.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_VALUE);

  const onUpload = (results: typeof INITIAL_IMPORT_VALUE) => {
    setImportResults(results);
    setVariant(VARIANT.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_VALUE);
    setVariant(VARIANT.IMPORT);
  };

  const [AccountDialog, confirm] = useSelectAccount();
  const newTransaction = useNewTransaction();
  const createTransactions = useBulkDeleteAccounts();
  const deleteTransactions = usebulkdelet();
  const transactionsQuery = useGetTransactions();
  const transactions = transactionsQuery.data || [];

  let isDisabled = transactionsQuery.isLoading || deleteTransactions.isPending;

  const onSubmitInput = async (values: typeof transactions.$inferInsert) => {
    const accountId = await confirm();

    if (!accountId) {
      return;
    }

    const data = values.map((value) => ({
      ...value,
      accountId: accountId as string,
    }));

    createTransactions.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      },
    });
  };

  if (isDisabled) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-10">
        <Card className="border-none drop-shadow-sm">
          <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-center">
            <Skeleton className="w-[150px] h-[30px]"></Skeleton>
            <Skeleton className="w-[100px] h-[30px]"></Skeleton>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Loader2 className="text-center size-6 animate-spin" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === VARIANT.IMPORT) {
    return (
      <>
        <AccountModal />
        <ImportCard
          data={importResults.data}
          onCancel={onCancelImport}
          onSubmit={onSubmitInput}
        />
      </>
    );
  }

  return (
    <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Transaction History
          </CardTitle>

          <div className="flex flex-col items-center gap-x-2 gap-y-2 lg:flex-row">
            <Button
              size="sm"
              onClick={newTransaction.onOpen}
              className="w-full lg:w-auto"
            >
              <Plus className="mr-2 size-4" /> Add new
            </Button>

            <UploadButton onUpload={onUpload} />
          </div>
        </CardHeader>

        <CardContent>
          <DataTable
            filterKey="payee"
            columns={columns}
            data={transactions}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);

              deleteTransactions.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default TransactionsPage;
