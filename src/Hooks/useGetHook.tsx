import useSWR, { SWRConfiguration } from "swr";

const useGetHook = (url: string, props?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating } = useSWR(url, { ...props });

  return { data, error, isLoading, isValidating };
};

export default useGetHook;
