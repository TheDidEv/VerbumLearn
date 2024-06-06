import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { deleteUserColl, getUserColl, updateUserColl } from "../../slices/userCollectionsSlice";
import { Link } from "react-router-dom";
import { getWordByCategory } from "../../slices/userWordsSlice";
import './collection.scss';
import { AddCollectionForm } from "./addCollectionForm";

export const Collection = () => {
    const [editModalMap, setEditModalMap]: any = useState({});
    const [deleteModalMap, setDeleteModalMap]: any = useState({});
    const [newName, setNewName] = useState('');

    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.auth.basicUserInfo);

    const userId = userData?.Id;
    const data = useAppSelector((state) => state.userCollection.userCollections);

    useEffect(() => {
        async function getColl() {
            await dispatch(getUserColl(userId!)).unwrap();
        }
        getColl();
    }, [dispatch, userId]);

    const onCLickHandler = async (catId: string) => {
        try {
            if (catId) {
                await dispatch(getWordByCategory(catId)).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editModalHandler = (objId: string) => {
        setEditModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    };

    const deleteModalHandler = (objId: string) => {
        setDeleteModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    };

    const editHandler = (id: string, newName: string) => {
        dispatch(updateUserColl({
            id: id,
            newName: newName
        })).unwrap();

        setNewName('');
        editModalHandler(id);
    };

    const deleteHandler = (id: string) => {
        dispatch(deleteUserColl(id)).unwrap();
        deleteModalHandler(id);
    };

    return (
        <div className="container">
            <AddCollectionForm />
            <ul className="flex flex-wrap justify-between mx-5">
                {data?.map(obj => (
                    <li key={obj.Id} className="w-2/5 p-4 m-2 bg-gray-100 border border-gray-200 rounded-lg">
                        <Link to="/wordsByCategory">
                            <button onClick={() => onCLickHandler(obj.Id)}>{obj.Name}</button>
                        </Link>

                        <div className="columns-2">
                            <div>
                                {obj.Name !== "AllWords" ?
                                    <button className="bg-green-100 rounded-lg p-1 hover:bg-green-200" onClick={() => editModalHandler(obj.Id)}>
                                        Edit
                                    </button>
                                    : null}
                                <div className={`modal ${editModalMap[obj.Id] ? 'on' : 'off'}`} id="modal">
                                    <h2>Edit collection Name</h2>
                                    <input
                                        className="content bg-gray-200 rounded"
                                        type='text'
                                        placeholder="New collection name"
                                        onChange={(e) => setNewName(e.target.value)}
                                        value={newName}
                                    />
                                    <div className="actions">
                                        <button className="toggle-button bg-green-100 hover:bg-green-200" onClick={() => editModalHandler(obj.Id)}>Close</button>
                                    </div>
                                    <div className="actions">
                                        <button className="toggle-button bg-red-100 hover:bg-red-200" onClick={() => editHandler(obj.Id, newName)}>Change</button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {obj.Name !== "AllWords" ?
                                    <button className="bg-red-100 hover:bg-red-200 rounded-lg p-1" onClick={() => deleteModalHandler(obj.Id)}>
                                        Delete
                                    </button>
                                    : null}
                                <div className={`modal ${deleteModalMap[obj.Id] ? 'on' : 'off'}`} id="modal">
                                    <h2>Delete Modal Window</h2>
                                    <div className="content">Modal windows for delete collection data</div>
                                    <div className="actions">
                                        <button className="toggle-button bg-green-100 hover:bg-green-200" onClick={() => deleteModalHandler(obj.Id)}>Close</button>
                                    </div>
                                    <div className="actions">
                                        <button className="toggle-button bg-red-100 hover:bg-red-200" onClick={() => deleteHandler(obj.Id)}>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};
