import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from "../components/Button"



const SingleCardDetails = (item) => {

    const [singleCardData, setSingleCardData] = useState(null)
    const { id } = useParams()

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

    }


    return (
        <>
            <div className=' bg-gray-600 w-[100%] h-[558px]   py-[5px] px-[100px]   '>
                {singleCardData ? (

                    <div className='my-[57px] rounded-3xl border bg-white overflow-x-hidden border-black flex   '>

                        <div className="bg-white  rounded-l-3xl py-[70px] flex items-center h-80">
                            <img src={singleCardData.image} alt={singleCardData.title} className="      rounded-l-3xl   border-black max-w-96  h-[110%]" />
                        </div>

                        <div className=' border-l  border-black  p-[45px]'>
                            <p className=' font-semibold text-2xl mb-2'> Title: <span className="font-bold text-gray-800">&nbsp;{singleCardData.title}</span></p>
                            <p className='font-semibold text-2xl mb-2'>Price:  <span className="font-bold  text-gray-800 "> &nbsp; {singleCardData.price}PKR</span></p>
                            <p className='font-semibold text-2xl mb-5'>Category:    <span className="font-bold  text-gray-800 ">{singleCardData.category}   </span></p>
                            <p className='font-medium text-lg mb-5'>Description: <span className="font-medium  text-gray-800 ">{singleCardData.description}</span></p>
                            <p className='font-semibold text-xl mb-6'><span className="text-green-700">Quantity: {singleCardData.rating.count} Piece</span> &nbsp; | &nbsp;<span className="text-orange-500"> {singleCardData.rating.rate} Ratings</span></p>
                            <button onClick={backHome} className='border rounded-lg  p-3   font-bold bg-gray-600 text-white hover:bg-white hover:text-gray-600 hover:border-gray-600 hover:border-2'>Back to Home</button>   </div>
                    </div>

                ) : <h1>Loading...</h1>
                }
            </div>

        </>
    )
}




export default SingleCardDetails