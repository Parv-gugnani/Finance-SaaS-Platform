"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl font-medium text-[#FAFAFA]">
        Welcome Back 💹{isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-sm lg:text-base text-[#77a2c8]">
        Finpro will help you be Pro at your finance🚀
      </p>
    </div>
  );
};
