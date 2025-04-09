/** @format */

export const getLink = (page: string) =>
  `/${page == "Mens" || page == "Womens" ? "products/" : ""}${
    page != "Home" ? page.toLowerCase() : ""
  }`;
