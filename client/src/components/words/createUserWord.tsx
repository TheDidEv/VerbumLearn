import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { createWord } from "../../slices/userWordsSlice";

export const CreateUserWord = () => {
    const [word, setWord] = useState('');
    const [translate, setTranslate] = useState('');
    const [collection, setCollection] = useState('AllWords');

    const userId = useAppSelector((state) => state.auth.basicUserInfo?.Id);
    const category = useAppSelector((state) => state.userCollection.userCollections);
    const words = useAppSelector((state) => state.userWords.words)

    const dispatch = useAppDispatch();

    const [errorCreateArea, setErrorCreateArea] = useState(false);
    const [errorLanguage, setErrorLanguage] = useState(false);

    const onClickHandler = (Word: string, Translate: string, collection: string) => {
        const isWordExist = words!.some(elem => elem.Word === word);
        if ((word.length <= 0 || translate.length <= 0) || (word.length >= 35 || translate.length >= 35)) {
            setErrorCreateArea(true);
        } else if (isWordExist) {
            setErrorCreateArea(true);
        } else if (errorLanguage) {
            setErrorCreateArea(true);
        } else {
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
            setErrorLanguage(false);
        }
    }

    const onChangeSelector = (event: any) => {
        setCollection(event.target.value)
    }

    const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value) || value === '') {
            setWord(value);
            setErrorLanguage(false);
        } else {
            setErrorLanguage(true);
        }
    }

    const handleTranslateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[а-яА-ЯіІїЇєЄґҐ']*$/u.test(value) || value === '') {
            setTranslate(value);
            setErrorLanguage(false);
        } else {
            setErrorLanguage(true);
        }
    }

    return (
        <div className="py-5">
            <input
                placeholder="Word"
                className="bg-gray-200 m-1 rounded-l"
                value={word}
                onChange={handleWordChange}
            />
            <input
                placeholder="Translate"
                className="bg-gray-200 m-1"
                value={translate}
                onChange={handleTranslateChange}
            />
            <select className="bg-gray-200 m-1 rounded-r" value={collection} onChange={onChangeSelector}>
                {category?.map(obj => (
                    <option key={obj.Id} value={obj.Name}>{obj.Name}</option>
                ))}
            </select>

            <button
                className="bg-green-100 rounded w-12 hover:bg-green-200"
                onClick={() => onClickHandler(word, translate, collection)}
            >
                Add
            </button>

            {errorCreateArea ? <div className="bg-red-100 rounded w-48 mx-auto my-1">Error: Areas word and translate will be not empty or will be less than 35 symbols or same name already created or incorrect language</div> : null}
            {errorLanguage ? <div className="bg-red-100 rounded w-48 mx-auto my-1">Error: Word should be in English and Translate should be in Ukrainian</div> : null}
        </div>
    )
}
