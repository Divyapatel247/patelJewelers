import React, { useState } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import{ loadStripe } from "@stripe/stripe-js"

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  // const data = {
  //   name: "",
  //   phone: "",
  //   time: "",
  // }
  // const [inputs, setInputs] = useState([]);
  // const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");  
  //   const [time, setTime] = useState("");
  

  // const handleChange = (e) => {

  //   setInputs({...inputs, [e.target.name]: e.target.value});
  // };
  

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   const newInput = {
  //     name,
  //     phone,
  //     time,
  //   }
  //   try {
  //     const res = await axios.post("http://localhost:1337/api/orders", newInput);
  //     console.log(res)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post(
  //       {
  //         baseURL: http://localhost:1337/api + "/orders",
  //         headers: {
  //           Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  //         },
  //       },
  //       inputs,
  //       console.log(inputs)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleClick = async (e) => {
  //    e.preventDefault();
  //   try {
  //     const headers = {
  //       'Content-Type': 'application/json',
  //     'Authorization': "bearer " + process.env.REACT_APP_API_TOKEN,
  //     }
  //     const response = await axios.post(process.env.REACT_APP_API_URL + "/orders", inputs,{ headers } );
  //     console.log(response);
  //   } catch (error) {
  //     // console.log(error);
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       console.log(error.response.status);
  //       console.log(error.response.data);
  //     } else if (error.request) {
  //       // The request was made, but no response was received
  //       console.log(error.request);
  //     } else {
  //       // Something happened in setting up the request that triggered an error
  //       console.log('Error', error.message);
  //     }
  //     console.log(error.config);
  //   }
  //   console.log(inputs)
  // };



  const totalWeight = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.weight;
    });
    return total.toFixed(4);
  };

  const stripePromise = loadStripe(
    "pk_test_51MsqDNSF3i159s7ZWn8DQkLJfpoxYTwzOBks3MehyBJXIbwUx5c1jto2fbSb3Bmup2prvwq75nGWNaUVQUAOgYqK00CwvvJYpz"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div className="cart">
       <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.weight}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalWeight()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
  
  // return (
  //   <>
  //     <div className="enquiry">
  //       <div className="cart-info">
  //         <h1>Products in your cart</h1>
  //         <div className="cart">
  //           {products?.map((item) => (
  //             <div className="item" key={item.id}>
  //               <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
  //               <div className="details">
  //                 <h1>{item.title}</h1>
  //                 <p>{item.desc?.substring(0, 100)}</p>
  //                 <div className="price">
  //                   {item.quantity} x {item.weight} gm
  //                 </div>
  //               </div>
  //               <DeleteOutlinedIcon
  //                 className="delete"
  //                 onClick={() => dispatch(removeItem(item.id))}
  //               />
  //             </div>
  //           ))}
  //           <hr />
  //         </div>
  //         <div className="total">
  //           <span>TOTAL WEIGHT</span>
  //           <span>{totalWeight()} gm</span>
  //         </div>
  //         <span className="reset" onClick={() => dispatch(resetCart())}>
  //           Reset Cart
  //         </span>
  //       </div>

  //       <div className="form">
  //         <form action="">
  //           {/* <span>LEAVE A MESSAGE</span> */}
  //           <marquee behavior="" direction="" scrollamount="5" width="80%" loop="-1">
  //           <h1>Fill Form To Get Further Information </h1>
  //           </marquee>
  //           <input
  //             type="text"
  //             placeholder="Your Name"
  //             name="name"
  //             // value={}
  //             onChange={(e)=>setName(e.target.value)}
  //           />
  //           <input
  //             type="text"
  //             placeholder="Phone Number"
  //             name="phone"
  //             // value={}
  //             onChange={(e)=>setPhone(e.target.value)}
  //           />
  //           <input
  //             type="text"
  //             placeholder="Prefer Time & Day To Receive Call From Us"
  //             name="time"
  //             // value={}
  //             onChange={(e)=>setTime(e.target.value)}
  //           />
  //           <button onClick={handleClick}>PROCEED TO CHECKOUT</button>
  //         </form>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Cart;
