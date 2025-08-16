import React, { useContext, useState , useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Card from './Card';

function LatestCollections() {

    const  { products } = useContext(ShopContext);
     const [product , setProduct] = useState([]);
    console.log(products)

    useEffect(()=>{
      
      setProduct(products.slice(0 , 10 ))

    }, [])
         
  return (
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
  {product.map((product) => (
    <Card
      key={product._id}
      id={product._id}
      img={product.image[0]} // ✅ use first image from array
      name={product.name}
      price={product.price}
    />
  ))}
</div>


  )
}

export default LatestCollections