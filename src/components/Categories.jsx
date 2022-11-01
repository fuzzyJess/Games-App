import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import * as api from '../Api';


const Categories = () => {
    const [categories, setCategories] = useState([]);
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



//amend css to move buttons to the left of the category description...
  return (
    <>
    <h2>Categories</h2>
        <main>
            {categories.map((category) => {
                return (<Link to={`/categories/${category.slug}`} key={category.slug} ><div id="category_menu"><button>{category.slug}</button>
                <p>{category.description}</p>
                </div></Link>)
                })}
        </main>
    </>
  )
}

export default Categories