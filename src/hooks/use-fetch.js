import { useState } from "react";

const useFetch = (requestConfig, applyData) => {
  const [error, setError] = useState(null);
  const callApi = async () => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : "",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("An error has occured. Please contact the admin.");
      }

      applyData(await response.json());
    } catch (err) {
      setError(
        err.message || "An error has occured. Please contact the admin."
      );
    }
  };
  return {
    error,
    callApi,
  };
};

export default useFetch;
