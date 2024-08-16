"use client";
import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/features/accounts/components/new-accounts-sheet";
import { useEffect, useState } from "react";
import EditAccountSheet from "@/features/accounts/components/edit-accounts-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};
