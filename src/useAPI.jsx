import { useEffect, useState } from "react";
const useAPI = (url) => {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { mode: "cors", signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          setError(new Error(`${response.status}`));
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((err) => {
        if(err.name ==='AbortError'){
          console.log('aborted');
          return;
        }
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [url]);
  return [data, error, loading];
};

export default useAPI;
