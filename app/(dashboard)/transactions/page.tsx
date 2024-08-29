import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import useSelectAccountAndConfirmTransaction from "@/features/transactions/hooks/use-select-account";
import { useState } from "react";

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
  const [AccountModa, confirm] = useSelectAccountAndConfirmTransaction();
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

  const transactionsQuery = useGetTransactions();
}
