import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



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
            <div className=' bg-gray-600 w-[1350px]  py-[5px] px-[100px]  '>
                {singleCardData ? (

                    <div className='my-[30px] rounded-3xl border bg-white  border-black flex   '>

                        <div className="bg-white  rounded-l-3xl">
                            <img src={singleCardData.image} alt={singleCardData.title} className='px-[30px] py-[20px]   border-r  rounded-l-3xl   border-black  w-[550px]  h-[300px] ' />
                        </div> 

                        <div className='  p-[20px]    '>
                            <p className=' font-bold text-2xl mb-3'> Title: {singleCardData.title}</p>
                            <p className='font-semibold text-xl mb-3'>Price: {singleCardData.price}PKR</p>
                            <p className='font-medium text-xl mb-3'>Category: {singleCardData.category}</p>
                            <p className='font-medium text-xl mb-3'>Description: {singleCardData.description}</p>
                            <p className='font-medium text-xl mb-3'>Quantity: {singleCardData.rating.count}</p>
                            <p className='font-medium text-xl mb-3'>{singleCardData.rating.rate} Ratings</p>
                            <button onClick={backHome} className='border rounded-lg bg-gray-600 text-white p-3 mt-3'>Back to Home</button>
                        </div>

                    </div>

                ) : <h1>Loading...</h1>
                }
            </div>
        </>
    )
}




export default SingleCardDetails