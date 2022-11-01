import { useState, useEffect } from "react";

import * as api from '../Api';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    api.fetchCategories().then((response) => {
      setCategories(response);
      setIsLoading(false);
          // poss if (>200){deal with diff errors}
        setErr(null)
    }).catch((err) => {
        setErr(err)


    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
    <h2>Categories</h2>
        <main>
            {categories.map((category) => {
                return (<><button key={category.slug}>{category.slug}</button><br/></>)
                })}
        </main>
    </>
  )
}

export default Categories