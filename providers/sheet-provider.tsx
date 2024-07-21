"use client";
import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/features/accounts/components/new-accounts-sheet";
import { useEffect, useState } from "react";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};
