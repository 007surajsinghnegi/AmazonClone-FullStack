import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useState } from "react";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Max_rating=5;
const Min_rating=1;

function Product({ id, title, price, description, category, image  }) {

    const [rating] = useState(
        Math.floor(Math.random()*(Max_rating-Min_rating +1)) + Min_rating
    );

    const[prime] = useState(
        Math.random()<0.5 
    )

    const dispatch = useDispatch();
    const addItemToBasket =()=>{

        const product ={
            id, 
            title, 
            price, 
            description, 
            category, 
            image,
            rating,
            prime
        };

        dispatch(addToBasket(product));
    };

    return (
        <div className="relative flex flex-col bg-white m-5 z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            
            <Image 
                src={image} 
                height={200} 
                width={200} 
                objectFit="contain"
            />
            
            <h4 className="my-3">{title}</h4>
            
            <div className="flex">
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon className="h-5 text-yellow-500"/>
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="INR" />
            </div>

            {
                prime && (
                    <div className="flex items-center space-x-2 -mt-5">
                        <img className="w-12" src="https://links.papareact.com/fdw" />
                        <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                    </div>
                )
            }

            <button className="bg-yellow-500 mt-auto button" onClick={addItemToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
