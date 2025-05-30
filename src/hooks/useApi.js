import { useEffect, useState } from "react";
const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    setError(false);
    setData(null);
    const response = await apiFunc(...args);

    setLoading(false);

    if (!response.ok) {
      setError(true);
    }

    setData(response.data);

    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
