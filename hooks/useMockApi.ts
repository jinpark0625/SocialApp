import { useState } from "react";

const useMockApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiCall = async <T>(
    apiMethod: (...args: any[]) => Promise<T>,
    ...args: any[]
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiMethod(...args);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    apiCall,
    loading,
    error,
  };
};

export default useMockApi;
