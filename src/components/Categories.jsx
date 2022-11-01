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

  return (
    <>
    <h2>Game categories</h2>
        <main>
          
          <table id="cat_table">
              {categories.map((category) => {
                  return (
                  <tr>
                    <td><Link to={`/categories/${category.slug}`} key={category.slug}><button>{category.slug}</button></Link></td>
                    <td id="cat_des">{category.description}</td>
                  </tr>)
                  })}
          </table>
        </main>
    </>
  )
}


export default Categories