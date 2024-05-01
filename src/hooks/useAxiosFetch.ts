import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosError } from "axios";
import { api } from "@/api/instance";

interface UseAxiosFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError<unknown> | null;
}

export const useAxiosFetch = <T>(
  url: string,
  options?: AxiosRequestConfig,
): UseAxiosFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError<unknown> | null>(null);
  const stringifiedOptions = JSON.stringify(options);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api(url, options);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError<unknown>);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null); // Clear data when component unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, stringifiedOptions]);

  return { data, loading, error };
};
