import { DefaultError, QueryKey, UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import React from "react";
import { logger } from "../utils";
// import { useError } from "@/useError";

type CustomOptions = {
  onErrorData?: (data?: any) => void;
};

type ApiQueryOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey> & CustomOptions;

export type UseApiQueryOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Partial<ApiQueryOptions<TQueryFnData, TError, TData, TQueryKey>>;

export const useApiQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: ApiQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) => {
  //   const { handleError } = useError();

  const res = useQuery(options);

  React.useEffect(() => {
    if (res.error) {
      //   handleError(res.error as any, (data) => {
      //     options.onErrorData?.(data);
      //   });
      console.log("Query error is inside useQuery hook");
      logger.error(res.error);
    }
  }, [res.error]);

  return res;
};
