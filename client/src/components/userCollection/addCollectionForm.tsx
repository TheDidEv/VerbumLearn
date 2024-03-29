import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { postUserColl } from "../../slices/userCollectionsSlice";

export const AddCollectionForm = () => {
    const [name, setName] = useState('');

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.auth.basicUserInfo);

    const userId = userData?.Id;

    useEffect(() => { setName(name) }, [name]);

    const [collError, setCollError] = useState(false)

    const addCollectionHandler = async () => {
        if (name.length <= 0 || name.length >= 35) {
            setCollError(true);
        }
        else {

            await dispatch(postUserColl({
                id: userId!,
                newName: name,
            })).unwrap();
            setName('');
            setCollError(false);
            // window.location.reload();
        }
    }

    return (
        <>
            <input
                placeholder="Enter collection name"
                className="my-2 rounded-l bg-gray-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button className="bg-green-100 rounded-r w-12" onClick={() => addCollectionHandler()}>Add</button>

            {collError ? <div className="bg-red-100 rounded w-36 mx-auto my-2">Error: Area will be not empty or will be less than 35 symbols</div> : null}
        </>
    );
}