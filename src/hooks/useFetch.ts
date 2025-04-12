/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Root } from "../types/Root";
import { categories } from "../data/Categories";
import { ProductType } from "../types/Product";

export const useFetch = <T>(url: string, loop?: boolean) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    setIsLoading(true);
    const lastWord = url.split("/")[5];
    const isGender = lastWord == "mens" || lastWord == "womens";
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
            loop
              ? data.products.map((product: Root) => {
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
              : {
                  id: data.id,
                  main_img: data.thumbnail,
                  images: data.images,
                  name: data.title,
                  rating: data.rating,
                  category: data.category,
                  description: data.description,
                  price: data.price,
                }
          );
        })
        .catch(() => setErr("Something wrong ..."))
        .finally(() => setIsLoading(false));
  }, [url]);
  return { data, isLoading, err };
};
