import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks"

export const DefaultLayout = () => {
    const baseUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

    if (baseUserInfo) {
        return <Navigate to={'/'} />;
    }

    return (
        <>
            <Outlet />
        </>
    )
}