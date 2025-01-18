"use client";

import { createContext, ReactElement, useState } from "react";

type LoadingPostsStateProviderProps = {
  children: ReactElement;
};

type LoadingPostsStateContextValues = {
  isPostsLoading: boolean;
  setIsPostsLoading: (value: boolean) => void;
};

export const LoadingPostsStateContext =
  createContext<LoadingPostsStateContextValues>({
    isPostsLoading: false,
    setIsPostsLoading: () => null,
  });

export const LoadingPostsStateProvider = ({
  children,
}: LoadingPostsStateProviderProps): ReactElement<LoadingPostsStateProviderProps> => {
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);

  return (
    <LoadingPostsStateContext.Provider
      value={{
        isPostsLoading,
        setIsPostsLoading,
      }}
    >
      {children}
    </LoadingPostsStateContext.Provider>
  );
};
