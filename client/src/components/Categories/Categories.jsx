import React, { useEffect, useState } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [data, setData] = useState([])

useEffect(()=>{
  const fetchData = async ()=>{
try {
    const res = await axios.get(
        process.env.REACT_APP_API_URL+"/categories?populate=*",
        {
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
        }
    );
    console.log(res)
    setData(res.data.data)
} catch (err) {
    console.log(err)
}
  };
  fetchData();
},[])
  return (
    <>
      <div className="title">
        <h2>Shop by Category</h2>
        <p>Collection Of New Design</p>
      </div>
      <div className="categories">
       {data.map((item) =>
        <div className="card">
        <Link className="link" to={`/products/${item.id}`} >
          <img  src={ process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url } alt="" />
          <div className="des">
            <h4>{item?.attributes.title}</h4>
          </div>         
        </Link>
        </div>
       )}
        </div>
       
      

      
    </>
  );
};

export default Categories;


/* <div className="card">
        <Link className="link" to='/products/1' >
          <img src="/img/11.jpg" alt="" />
          <div className="des">
            <h4>Necklace</h4>
          </div>         
        </Link>
        </div> */

        // <div className="categories">
        // <div className="card">
        // <Link className="link" to='/products/1' >
        //   <img src="/img/11.jpg" alt="" />
        //   <div className="des">
        //     <h4>Necklace</h4>
        //   </div>         
        // </Link>
        // </div>
        // </div>
       
