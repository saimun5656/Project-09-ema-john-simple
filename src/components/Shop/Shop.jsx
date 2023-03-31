import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
const addToCart=product=>{
   setCart([...cart,product])
}
    //products.forEach(product=>product.name==='Squad Glass Bottle 720 ML'?console.log(product):'')
    return (
        <div className='shop-container'>
            <div className='products-container'>
             {
                products.map((product)=><Product 
                product={product} 
                key={product.id}
                addToCart={addToCart}
                ></Product>)
             }
            </div>
            <div className='cart-container'>
                <p>Order Summary</p>
             <p>total item :{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;