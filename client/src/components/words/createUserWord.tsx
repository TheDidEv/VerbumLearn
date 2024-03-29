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

    const [errorCreateArea, setErrorCreateArea] = useState(false);

    const onClickHandler = (Word: string, Translate: string, collection: string) => {
        if ((word.length <= 0 || translate.length <= 0) || (word.length >= 35 || translate.length >= 35)) {
            setErrorCreateArea(true);
        }
        else {
            dispatch(createWord({
                Id: userId!,
                Word: Word,
                Translate: Translate,
                IntermediateWWordCollectionName: collection,
            })).unwrap();

            setWord('');
            setTranslate('');
            setCollection('AllWords');
            setErrorCreateArea(false);
        }
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

            {errorCreateArea ? <div className="bg-red-100 rounded w-48 mx-auto my-1">Error: Areas word and translate will be not empty or will be less than 35 symbols</div> : null}
        </div>
    )
}