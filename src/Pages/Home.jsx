import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div className='pt-20 pb-20 bg-gray-600 flex flex-wrap justify-around'>
        {productData ? productData.map((item) => (
          <div key={item.id} className='w-full sm:w-[365px] md:w-[300px] lg:w-[250px] mx-2 my-4 shadow-lg hover:shadow-xl rounded-2xl border bg-white border-black'>
            <img src={item.image} alt={item.title} className='w-full h-[320px] sm:h-[250px] md:h-[200px] lg:h-[180px] bg-gray-600 rounded-t-2xl border-b border-black' />
            <div className='p-5'>
              <p className='font-bold text-2xl sm:text-xl md:text-lg mb-3'>Title: {item.title}</p>
              <p className='font-semibold text-xl sm:text-lg md:text-base mb-3'>Price: {item.price}</p>
              <p className='font-medium text-xl sm:text-lg md:text-base mb-3'>Category: {item.category}</p>
              <button onClick={() => checkDetails(item)} className='transition-shadow duration-300 hover:shadow-md font-bold border rounded-lg bg-gray-600 text-white p-3 mt-3 hover:bg-white hover:text-gray-600 hover:border-gray-600 hover:border-2'>
                Check Details
              </button>
            </div>
          </div>
        )) : (
          <h1 className="flex items-center justify-center h-[74vh] text-3xl font-bold py-10">
            Loading...
          </h1>
        )}
      </div>
    </>


  )
}


export default Home