import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import '../index.css'



const SingleCardDetails = (item) => {

  const [singleCardData, setSingleCardData] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {

    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data)
        setSingleCardData(res.data)

      })
      .catch((err) => {
        console.log(err)
      }
      )

  }, [])

  const backHome = () => {
    navigate(-1);
  }


  return (

    <>
      <div className='pt-20 pb-20 bg-gray-600 w-full flex justify-center items-center'>
        {singleCardData ? (
          <div className="flex flex-col sm:flex-row shadow-lg bg-white rounded-3xl border border-black overflow-hidden max-w-4xl">
            <div className="flex justify-center items-center w-full bg-white">
              <img
                src={singleCardData.image}
                alt={singleCardData.title}
                className="rounded-2xl object-cover w-full h-auto max-w-[365px] max-h-[320px]"
              />
            </div>

            <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-200 border-t border-gray-300">
              <p className="font-bold text-xl sm:text-2xl mb-2">
                Title: <span className="text-gray-700">{singleCardData.title}</span>
              </p>
              <p className="font-bold text-xl sm:text-2xl mb-2">
                Price: <span className="text-gray-700">{singleCardData.price} PKR</span>
              </p>
              <p className="font-bold text-xl sm:text-2xl mb-5">
                Category: <span className="text-gray-700">{singleCardData.category}</span>
              </p>
              <p className="font-medium text-base sm:text-lg mb-5">
                Description: <span className="text-gray-800">"{singleCardData.description}"</span>
              </p>
              <p className="font-semibold text-base sm:text-xl mb-6">
                <span className="text-green-700">Quantity: {singleCardData.rating.count} Piece</span> |
                <span className="text-orange-500"> {singleCardData.rating.rate} Ratings</span>
              </p>
              <button
                onClick={backHome}
                className="w-full sm:w-auto max-w-[130px] transition-shadow duration-300 hover:shadow-lg py-2 sm:py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-white hover:text-gray-600 hover:border-gray-600 hover:border-2"
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <h1 className="flex items-center justify-center text-2xl sm:text-3xl font-bold py-10">Loading...</h1>
        )}
      </div>
    </>


  )
}




export default SingleCardDetails