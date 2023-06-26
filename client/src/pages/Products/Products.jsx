import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import "./Products.scss"
import CircleIcon from '@mui/icons-material/Circle';
import useFetch from '../../hooks/useFetch';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e) =>{
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  }
  console.log(selectedSubCats)

  return (
    <>
    <div className="products">
    <div className="left">
      <div className="filterItem">
        <h2>Product Categories</h2>
      {data?.map((item)=>(
        <div className="inputItem" key={item.id} id={item.attributes.title} >
        <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
        <label htmlFor={item.id} ><CircleIcon/>{item.attributes.title}</label>
       </div>
      )) }
      
      </div>
      <div className="filterItem">
        <h2>Weight Range(Gram) </h2>

        <div className="inputItem">
        <input type="checkbox" id='1' value={1} />
        <label htmlFor="2">0gm - 10gm</label>
       </div>
       <div className="inputItem">
        <input type="checkbox" id='2' value={2} />
        <label htmlFor="2">10gm - 20gm</label>
       </div>
       <div className="inputItem">
        <input type="checkbox" id='3' value={3} />
        <label htmlFor="2">20gm - 30gm</label>
       </div>
       <div className="inputItem">
        <input type="checkbox" id='4' value={4} />
        <label htmlFor="2">40gm - 50gm</label>
       </div>
       <div className="inputItem">
        <input type="checkbox" id='5' value={5} />
        <label htmlFor="2">50gm - 60gm</label>
       </div>
       <div className="inputItem">
        <input type="checkbox" id='6' value={7} />
        <label htmlFor="2">60gm - 70gm</label>
       </div>

        
      </div>
      
    </div>

        <div className="right">
          
          <img className='catImg' src="https://www.wallpapertip.com/wmimgs/62-627145_gold-jewellery-hd.jpg" alt="" />

           <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} /> 
        </div>
        
      </div>
      <div className="feature">
      <FeaturedProducts type="Featured"/>
         </div>
         </>
  )
}

export default Products