import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";

type TableHeadSelectProps = {
  columnIndex: number;
  selectedColumns: Record<string, string | null>;
  onChange: (columnIndex: number, value: string | null) => void;
};

const options = ["amount", "date", "payee", "notes"];

export default function TableHeadSelect({
  columnIndex,
  selectedColumns,
  onChange,
}: TableHeadSelectProps) {
  const currentSelection = selectedColumns[`column_${columnIndex}`];

  return (
    <Select
      value={currentSelection || ""}
      onValueChange={(value) => onChange(columnIndex, value)}
    >
      <SelectTrigger
        className={cn(
          "focus:ring-offset-0 focus:ring-transparent outline-none border-none bg-transparent capitalize",
          currentSelection && "text-blue-500"
        )}
      >
        <SelectValue placeholder={"Skip"} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => {
          return (
            <SelectItem value={option} key={index} className="capitalize">
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
