import React from "react";
import Card from "../../components/Card/Card";
import "./Collection.scss";
import useFetch from "../../hooks/useFetch";

const Collection = () => {
  const { data, loading, error } = useFetch(
    `/products?populate=*`
  );
 



  return (<>
      <div className="header">
      <h2>#let's_saw</h2>     
      <p>We love to saw over products! </p>     
</div>
    <div className="items">
         
      
      <div className="bottom">
      {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
    </>
  );
};

export default Collection;
