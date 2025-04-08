/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Root } from "../types/Root";
import { categories } from "../data/Categories";
import { ProductType } from "../types/Product";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const lastWord = url.split("/")[5];
  const isGender = lastWord == "mens" || lastWord == "womens";
  useEffect(() => {
    setIsLoading(true);
    if (isGender) {
      let allData: ProductType[] = [];
      categories.map((category) => {
        if (category.split("-")[0] == lastWord) {
          axios
            .get(`${url.substring(0, url.lastIndexOf("/"))}/${category}`)
            .then(({ data }) => {
              data.products.map(
                (product: Root) =>
                  (allData = [
                    ...allData,
                    {
                      id: product.id,
                      main_img: product.thumbnail,
                      images: product.images,
                      name: product.title,
                      rating: product.rating,
                      category: product.category,
                      description: product.description,
                      price: product.price,
                    },
                  ])
              );
              setData(allData as T);
            })
            .catch(() => setErr("Something wrong ..."))
            .finally(() => setIsLoading(false));
        }
      });
    } else
      axios
        .get(url)
        .then(({ data }) => {
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
          );
        })
        .catch(() => setErr("Something wrong ..."))
        .finally(() => setIsLoading(false));
  }, [url]);
  return { data, isLoading, err };
};
