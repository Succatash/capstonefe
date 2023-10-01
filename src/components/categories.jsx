/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
const Categories = ({ styling, renderProduct, cat }) => {
  const [productCat, setProductsByCat] = useState([]);

  useEffect(() => {
    const a = async (param) =>
      await fetch(`https://fakestoreapi.com/products/category/${param}?limit=4`)
        .then((res) => res.json())
        .then((json) => setProductsByCat(json));
    a(cat);
  }, [cat]);

  return (
    <div className={styling.container}>
      {productCat.map((products) => {
        return renderProduct(products);
      })}
    </div>
  );
};
export default Categories;
