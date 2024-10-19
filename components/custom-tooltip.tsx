import { format } from "date-fns";
import type {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";

type CustomTooltipProps = {
  active: boolean | undefined;
  payload: Payload<ValueType, NameType>[] | undefined;
};

export const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  // Assuming the date is in string format, convert it to Date
  const dateString = payload[0].payload.date as string; // Expecting date as string
  const date = new Date(dateString); // Convert to Date object

  // Validate the date
  if (isNaN(date.getTime())) {
    console.error("Invalid date:", dateString);
    return null; // Return null if date is invalid
  }

  const income = payload[0].value as number;
  const expenses = payload[1].value as number;

  return (
    <div className="overflow-hidden rounded-sm border bg-white shadow-sm">
      <div className="bg-muted p-2 px-3 text-sm text-muted-foreground">
        {format(date, "MMM dd, yyyy")}
      </div>

      <Separator />

      <div className="space-y-1 p-2 px-3">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 rounded-full bg-blue-500" aria-hidden />
            <p className="text-sm text-muted-foreground">Income</p>
          </div>

          <p className="text-right text-sm font-medium">
            {formatCurrency(income)}
          </p>
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 rounded-full bg-rose-500" aria-hidden />
            <p className="text-sm text-muted-foreground">Expenses</p>
          </div>

          <p className="text-right text-sm font-medium">
            {formatCurrency(expenses * -1)}
          </p>
        </div>
      </div>
    </div>
  );
};
