import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getUserColl } from "../../slices/userCollections";

export const Collection = () => {
    const dispatch = useAppDispatch();

    const userData = useAppSelector((state) => state.auth.basicUserInfo);
    const userId = userData?.Id;

    const data = useAppSelector((state) => state.userCollection.userCollections);

    useEffect(() => {
        async function getColl() {
            dispatch(getUserColl(userId!)).unwrap();
        }
        getColl();
    }, [dispatch])

    return (
        <ul className="flex flex-wrap justify-between m-5">
            {data?.map(obj => (
                <li key={obj.Id} className="w-1/2 p-5 bg-gray-100 border border-gray-200 rounded-lg">
                    <div>{obj.Name}</div>
                </li>
            ))}
        </ul>
    );
}