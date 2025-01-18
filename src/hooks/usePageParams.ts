import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PageParamsHookResults = {
  getParam: (name: string) => string | null;
  setParam: (name: string, value: string) => void;
  deleteParam: (name: string) => void;
  setUrlParams: () => void;
};

export const usePageParams = (): PageParamsHookResults => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const getParam = (name: string): string | null => params.get(name);

  const setParam = (name: string, value: string): void =>
    params.set(name, value);

  const deleteParam = (name: string): void => params.delete(name);

  const setUrlParams = () => replace(`${pathName}?${params.toString()}`);

  return {
    getParam,
    setParam,
    deleteParam,
    setUrlParams,
  };
};
