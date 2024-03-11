import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";
import { allDataAnalysis } from "../../slices/dataAnalysisSlice";

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(state => state.auth.basicUserInfo)
    const userId = userInfo?.Id;

    const handlerLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(allDataAnalysis(userId!)).unwrap();
    }, [dispatch])

    const userAllData = useAppSelector(state => state.userData.allData);

    return (
        <div className="">
            <div className="h-52 py-8">
                <p className="py-1">Username: {userInfo?.UserName}</p>
                <p className="py-1">Email: {userInfo?.Email}</p>
                <p className="py-1">Account create at: {userInfo?.CreateAt.toString().split('T')[0]}</p>
            </div>

            <div className="h-96 bg-gray-100">
                Data
                <p>Wrong: {userAllData?.WRONG}</p>
                <p>Mid: {userAllData?.MID}</p>
                <p>Lerned: {userAllData?.LERNED}</p>
            </div>

            <button
                className="bg-gray-200 rounded-lg p-2 my-4"
                onClick={() => handlerLogout()}>Logout</button>
        </div>
    );
}