import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getUserColl } from "../../slices/userCollections";
import { Link } from "react-router-dom";
import { getWordByCategory } from "../../slices/user-words";

export const Collection = () => {
    const [editModalMap, setEditModalMap]: any = useState({});
    const [deleteModalMap, setDeleteModalMap]: any = useState({});


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

    const onCLickHandler = async (catId: string) => {
        console.log(catId);
        try {
            if (catId) {
                await dispatch(getWordByCategory(catId)).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const editModalHandler = (objId: string) => {
        setEditModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    }

    const deleteModalHandler = (objId: string) => {
        setDeleteModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    }

    return (
        <ul className="flex flex-wrap justify-between m-5">
            {data?.map(obj => (
                <li key={obj.Id} className="w-1/2 p-5 bg-gray-100 border border-gray-200 rounded-lg">
                    <button className="bg-red-400" onClick={() => editModalHandler(obj.Id)}>
                        edit
                    </button>
                    {editModalMap[obj.Id] ? <div>MODAL</div> : null}

                    <button className="bg-red-500" onClick={() => deleteModalHandler(obj.Id)}>
                        delete
                    </button>
                    {deleteModalMap[obj.Id] ? <div>DELETE</div> : null}

                    <Link to="/wordsByCategory">
                        <button onClick={() => onCLickHandler(obj.Id)}>{obj.Name}</button>
                    </Link>
                </li>
            ))}
        </ul>
    );
}