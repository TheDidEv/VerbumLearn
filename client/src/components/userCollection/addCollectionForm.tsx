import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { postUserColl } from "../../slices/userCollections";

export const AddCollectionForm = () => {
    const [name, setName] = useState('');

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.auth.basicUserInfo);

    const userId = userData?.Id;

    useEffect(() => { setName(name) }, [name]);

    const addCollectionHandler = async () => {
        await dispatch(postUserColl({
            id: userId!,
            newName: name,
        })).unwrap();
        setName('');
        window.location.reload();
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
        </>
    );
}