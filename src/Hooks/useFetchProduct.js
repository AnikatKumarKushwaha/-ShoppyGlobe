import { useEffect, useState } from "react";

export default function useFetchProduct(url) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      //------error handling to manage failed data fetch requests-------//
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { products, error, loading };
}
