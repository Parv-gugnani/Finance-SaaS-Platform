"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type props = {
  id: string;
};

export const Actions = ({ id }: props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild></DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
};
