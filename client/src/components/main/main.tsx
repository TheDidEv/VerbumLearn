import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <main className="flex flex-row justify-center mx-auto px-1">
            <Link to="/serviceWords" className="my-24 h-96 w-60 bg-gray-100 border hover:bg-gray-200 focus:outline-none border-gray-200 rounded-lg py-32">Service Words</Link>
            <div className="w-4"></div>
            <Link to="/collection" className="my-24 h-96 w-60 bg-gray-100 border hover:bg-gray-200 focus:outline-none border-gray-200 rounded-lg py-32">Collection</Link>
            <div className="w-4"></div>
            <Link to="/quiz" className="my-24 h-96 w-60 bg-gray-100 border hover:bg-gray-200 focus:outline-none border-gray-200 rounded-lg py-32">Quiz</Link>
        </main>
    )
}