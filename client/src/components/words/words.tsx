import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { CreateUserWord } from "./createUserWord";
import './words.scss';
import { deleteWordById, updateWord } from "../../slices/userWordsSlice";
import { addCatToWord } from "../../services/user-words-service";

export const Words = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.userWords.words);

    const [collection, setCollection] = useState('AllWords');
    const category = useAppSelector((state) => state.userCollection.userCollections);

    const [editModalMap, setEditModalMap]: any = useState({});
    const [addCatModalMap, setAddCatModalMap]: any = useState({});
    const [deleteModalMap, setDeleteModalMap]: any = useState({});

    const [newName, setNewName] = useState('');
    const [newTranslate, setNewTranslate] = useState('');

    useEffect(() => {

    }, [dispatch]);

    // Handler for modal windows
    const editModalHendler = (objId: string) => {
        setEditModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    }

    const deleteModalHendler = (objId: string) => {
        setDeleteModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    }

    const catModalHandler = (objId: string) => {
        setAddCatModalMap((prevState: any) => ({
            ...prevState,
            [objId]: !prevState[objId]
        }));
    }

    const onChangeSelector = (event: any) => {
        setCollection(event.target.value)
    }

    // Send server request
    const deleteHandler = (id: string) => {
        dispatch(deleteWordById(id));
        deleteModalHendler(id);
    }

    const updateHandler = (id: string, word: string, translate: string) => {
        dispatch(updateWord({
            id: id,
            word: word,
            translate: translate,
        })).unwrap();

        setNewName('');
        setNewTranslate('');

        editModalHendler(id);
    }

    const addCatHandler = (wordId: string, categoryName: string) => {
        addCatToWord(wordId, categoryName);
        catModalHandler(wordId);
        setCollection('AllWords');
    }

    return (
        <>
            <CreateUserWord />
            <ul className="flex flex-wrap justify-between m-5">

                {data?.map(obj => (
                    <li key={obj.Id} className="w-1/3 p-5 bg-gray-100 border border-gray-200 rounded-lg">
                        <p>Words: {obj.Word}</p>
                        <p>Translate: {obj.Translate}</p>
                        <p>Status: {obj.Status}</p>
                        <p>Priority: {obj.Priority}</p>

                        {obj.Word !== "Hello" ? <div className="columns-3">
                            {/* EDIT WORD */}
                            <div>
                                <button className="bg-green-100" onClick={() => editModalHendler(obj.Id)}>Edit</button>
                                {editModalMap[obj.Id] ?
                                    <>
                                        <div className="modal" id="modal">
                                            <h2>Edit word</h2>
                                            <input
                                                className="content bg-gray-200 rounded"
                                                type="text"
                                                placeholder="New name"
                                                onChange={(e) => setNewName(e.target.value)}
                                                value={newName}
                                            />

                                            <input
                                                className="content bg-gray-200 rounded"
                                                type="text"
                                                placeholder="New translate"
                                                onChange={(e) => setNewTranslate(e.target.value)}
                                                value={newTranslate}
                                            />

                                            <div className="actions">
                                                <button
                                                    className="toggle-button bg-green-100"
                                                    onClick={() => editModalHendler(obj.Id)}
                                                >
                                                    Close
                                                </button>
                                            </div>

                                            <div className="actions">
                                                <button
                                                    className="toggle-button bg-red-100"
                                                    onClick={() => updateHandler(obj.Id, newName, newTranslate)}
                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                    : null}
                            </div>

                            {/* ADD CATEGORY */}
                            <div>
                                <button className="bg-yellow-100" onClick={() => catModalHandler(obj.Id)}>Add category</button>
                                {addCatModalMap[obj.Id] ?
                                    <>
                                        <div className="modal" id="modal">
                                            <h2>Edit word</h2>
                                            <select className="content bg-gray-100 m-1 rounded-r" value={collection} onChange={onChangeSelector}>
                                                {category?.map(obj => (
                                                    <option key={obj.Id} value={obj.Name}>{obj.Name}</option>
                                                ))}
                                            </select>

                                            <div className="actions">
                                                <button
                                                    className="toggle-button bg-green-100"
                                                    onClick={() => catModalHandler(obj.Id)}
                                                >
                                                    Close
                                                </button>
                                            </div>

                                            <div className="actions">
                                                <button
                                                    className="toggle-button bg-red-100"
                                                    onClick={() => addCatHandler(obj.Id, collection)}
                                                >
                                                    Add category
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                    : null}
                            </div>

                            {/* DELETE WORD */}
                            <div>
                                <button className="bg-red-100" onClick={() => deleteModalHendler(obj.Id)}>Delete</button>
                                {deleteModalMap[obj.Id] ?
                                    <>
                                        <div className="modal">
                                            <h2>Delete</h2>
                                            <div className="content">Delete this word</div>

                                            <div className="actions">
                                                <button
                                                    className="toggle-button bg-green-100"
                                                    onClick={() => deleteModalHendler(obj.Id)}
                                                >
                                                    Close
                                                </button>
                                            </div>

                                            <div className="actions">
                                                <button
                                                    className="toggle-button bg-red-100"
                                                    onClick={() => deleteHandler(obj.Id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                    : null}
                            </div>

                        </div>
                            : null}
                    </li>
                ))}
            </ul>
        </>
    );
}