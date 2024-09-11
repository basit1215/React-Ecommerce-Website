import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {

  const [productData, setProductData] = useState(null)
  const navigate = useNavigate()
 
  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then(res => {
        console.log(res.data)
        setProductData(res.data)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])


  const checkDetails = (item) => {
    navigate(`singlecarddetails/${item.id}`)
  }



  return (
    <>
      <div className=' flex  flex-wrap     justify-around  bg-gray-600 '>
        {productData ? productData.map((item) => (
          <div key={item.id} className='   w-[365px]  mx-[5px] my-[30px] rounded-2xl  border  bg-white   border-black '>
            <img src={item.image} alt={item.title} className='  bg-gray-600  rounded-t-2xl border-b  border-black  w-[365px]  h-[320px] ' />
            <div className='p-5 '>
              <p className=' font-bold text-2xl mb-3'> Title: {item.title}</p>
              <p className='font-semibold text-xl mb-3'>Price: {item.price}</p>
              <p className='font-medium text-xl mb-3'>Category: {item.category}</p>
              <button onClick={() => checkDetails(item)} className='font-bold border rounded-lg bg-gray-600 text-white p-3 mt-3    hover:bg-white hover:text-gray-600 hover:border-gray-600 hover:border-2'>Check Details</button>
      

            </div>
          </div>

        )
        ) : <h1>Loading...</h1>
        }
      </div>
    </>
  )
}


export default Home