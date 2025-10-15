import { useEffect, useRef, useState } from "react";

export function useFetch(url, { skip = false } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState(null);
  const abortRef = useRef();

  useEffect(() => {
    if (skip || !url) return;
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    (async () => {
      setLoading(true); setError(null);
      try {
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) { const e = new Error(`HTTP ${res.status}`); e.status = res.status; throw e; }
        setData(await res.json());
      } catch (e) { if (e.name !== "AbortError") setError(e); }
      finally { setLoading(false); }
    })();

    return () => ctrl.abort();
  }, [url, skip]);

  return { data, loading, error };
}
