import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getQuiz, updateWord } from "../../services/quiz-service";
import { getUserColl } from "../../slices/userCollectionsSlice";

type quizType = {
    Id?: string;
    Translate: string;
    Word: string;
}

export const Quiz = () => {
    const dispatch = useAppDispatch();
    const [collection, setCollection] = useState('AllWords');
    const [quizData, setQuizData] = useState<quizType[]>();

    let [showAnswer, setShowAnswer] = useState<boolean>(false);

    const category = useAppSelector((state) => state.userCollection.userCollections);
    const userId = useAppSelector((state) => state.auth.basicUserInfo?.Id);
    const userEmail = useAppSelector((state) => state.auth.basicUserInfo?.Email);

    const [allWords, setAllWords] = useState<string[]>([]);

    useEffect(() => {
        async function getColl() {
            await dispatch(getUserColl(userId!)).unwrap();
        }
        getColl();
    }, [dispatch])

    const onChangeSelector = (event: any) => {
        setCollection(event.target.value)
    }

    const getQuizHandler = async (userId: string, CollName: string) => {
        setShowAnswer(false);
        const response = await getQuiz(userId, CollName);
        setQuizData([]);

        if (response.data) {
            setQuizData(response.data);
            const translations = await response.data.map((item: quizType) => ({ translate: item.Translate, word: item.Word }));
            setAllWords(translations);
        }
    }

    const sendAnswer = (answer: string) => {
        let isAnswer: boolean = false;
        setShowAnswer(true);
        if (quizData![0].Translate === answer) {
            isAnswer = true;
            const id: string | undefined = quizData && quizData.length > 0 ? quizData[0].Id : undefined;
            if (id !== undefined) {
                updateWord(id, isAnswer, userEmail!);

                // setQuizData(undefined);
                setCollection('AllWords');
            } else {
                return null;
            }
        }
        else {
            isAnswer = false;
            const id: string | undefined = quizData && quizData.length > 0 ? quizData[0].Id : undefined;
            if (id !== undefined) {
                updateWord(id, isAnswer, userEmail!);

                // setQuizData([]);
                setCollection('AllWords');
            } else {
                return null;
            }
        }
    }

    return (
        <div>
            <div className="p-5">
                <select className="bg-gray-200 m-1 rounded-r" value={collection} onChange={onChangeSelector}>
                    {category?.map(obj => (
                        <option key={obj.Id} value={obj.Name}>{obj.Name}</option>
                    ))}
                </select>
                <button className="bg-green-100 rounded" onClick={() => getQuizHandler(userId!, collection)}>Get quiz</button>
            </div>
            {(quizData && !showAnswer) ?
                <div>
                    <div className="flex flex-row justify-center mx-auto px-1 bg-gray-100 h-96 w-96 rounded-lg m-4 border border-gray-200">
                        <p className="py-36 text-2xl font-bold">{quizData[0].Word}</p>
                    </div>

                    <ul className="columns-2 w-80 justify-center mx-auto">
                        {quizData.map((obj, index) => (
                            <li key={index}>
                                <button
                                    className="bg-gray-100 h-16 w-32 p-4 rounded-lg border border-gray-200 font-medium"
                                    onClick={() => sendAnswer(obj.Translate)}
                                >
                                    {obj.Translate}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                : null}

            {(showAnswer && quizData) ?
                <ul className="justify-center mx-auto w-96 border rounded-lg">
                    <li className="bg-gray-50 border border-slate-100 py-4 rounded-lg">Correct answers</li>
                    {quizData?.map((obj, index) => (

                        <li key={index} className={index === 0 ? 'bg-green-100 border border-slate-100 rounded-lg' : 'bg-red-100 border border-slate-100 rounded-lg'} >
                            <p>{obj.Word}</p>
                            <p>{obj.Translate}</p>
                        </li>
                    ))}
                </ul>
                : null}

        </div >
    );
}