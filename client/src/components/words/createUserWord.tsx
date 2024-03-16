import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { createWord } from "../../slices/userWordsSlice";

export const CreateUserWord = () => {
    const [word, setWord] = useState('');
    const [translate, setTranslate] = useState('');
    const [collection, setCollection] = useState('AllWords');

    const userId = useAppSelector((state) => state.auth.basicUserInfo?.Id);
    const category = useAppSelector((state) => state.userCollection.userCollections);

    const dispatch = useAppDispatch();

    const onClickHandler = (Word: string, Translate: string, collection: string) => {
        dispatch(createWord({
            Id: userId!,
            Word: Word,
            Translate: Translate,
            IntermediateWWordCollectionName: collection,
        })).unwrap();

        setWord('');
        setTranslate('');
        setCollection('AllWords');
    }

    const onChangeSelector = (event: any) => {
        setCollection(event.target.value)
    }

    return (
        <div className="py-5">
            <input
                placeholder="Word"
                className="bg-gray-200 m-1 rounded-l"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <input
                placeholder="Translate"
                className="bg-gray-200 m-1"
                value={translate}
                onChange={(e) => setTranslate(e.target.value)}
            />
            <select className="bg-gray-200 m-1 rounded-r" value={collection} onChange={onChangeSelector}>
                {category?.map(obj => (
                    <option key={obj.Id} value={obj.Name}>{obj.Name}</option>
                ))}
            </select>

            <button
                className="bg-green-100 rounded w-12"
                onClick={() => onClickHandler(word, translate, collection)}
            >
                Add
            </button>
        </div>
    )
}