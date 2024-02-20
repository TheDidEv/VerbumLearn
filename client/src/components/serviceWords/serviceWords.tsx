import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { getAllWordServ } from "../../slices/serviceWordsSlice";


// TODO: finish func - add service word to user collection
export const ServiceWords = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.serviceWord.words);

    useEffect(() => {
        dispatch(getAllWordServ()).unwrap();
    }, [dispatch])

    return (
        <ul className="flex flex-wrap justify-between m-5">
            {data?.map(obj => (
                <li key={obj.Id} className="w-1/3 p-5 bg-gray-100 border border-gray-200 rounded-lg">

                    <div className="bg-white rounded-lg">{obj.Word}</div>
                    <div className="bg-green-100 rounded-lg my-2">{obj.UkrTranslate}</div>
                    <div className="bg-red-100 rounded-lg">{obj.CollectionName}</div>
                    <button className="my-2 w-20 bg-gray-200 hover:bg-white focus:outline-none rounded-lg">Button</button>

                </li>
            ))}
        </ul>
    );
}