import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

export const Words = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.userWords.words);

    // TODO
    return (
        <ul className="flex flex-wrap justify-between m-5">
            {data?.map(obj => (
                <li key={obj.Id} className="w-1/3 p-5 bg-gray-100 border border-gray-200 rounded-lg">
                    <p>{obj.Word}</p>
                    <p>{obj.Translate}</p>
                    <p>{obj.Status}</p>
                </li>
            ))}
        </ul>
    );
}