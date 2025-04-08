/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Root } from "../types/Root";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(({ data }) =>
        setData(
          data.products.map((product: Root) => {
            return {
              id: product.id,
              main_img: product.thumbnail,
              images: product.images,
              name: product.title,
              rating: product.rating,
              category: product.category,
              description: product.description,
              price: product.price,
            };
          })
        )
      )
      .catch(() => setErr("Something wrong ..."))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading, err };
};
