import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getAllWordServ } from "../../slices/serviceWordsSlice";
import { serviceWordToUSerCollection } from "../../services/service-words-service";

export const ServiceWords = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.serviceWord.words);

    const [userId, setUserId] = useState<string | undefined>();
    const userProfilDataInfo = useAppSelector((state) => state.auth.basicUserInfo);

    useEffect(() => {
        function getServiceWords() {
            dispatch(getAllWordServ()).unwrap();
        }

        function setId() {
            setUserId(userProfilDataInfo?.Id);
        }
        getServiceWords();
        setId();
    }, [dispatch, userProfilDataInfo]);

    const onClickHandler = (word: string, userId: string | undefined) => {
        if (userId) {
            serviceWordToUSerCollection(word, userId);
        }
    };

    return (
        <ul className="flex flex-wrap justify-between mx-5">
            {data?.map(obj => (
                <li key={obj.Id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 m-2 bg-gray-100 border border-gray-200 rounded-lg">

                    <div className="bg-white rounded-lg p-2">{obj.Word}</div>
                    <div className="bg-green-100 rounded-lg my-2 p-2">{obj.UkrTranslate}</div>
                    <div className="bg-red-100 rounded-lg p-2">{obj.CollectionName}</div>
                    <button
                        className="my-2 w-full bg-gray-200 hover:bg-white focus:outline-none rounded-lg"
                        onClick={() => onClickHandler(obj.UkrTranslate, userId)}
                    >
                        Add
                    </button>

                </li>
            ))}
        </ul>
    );
};
