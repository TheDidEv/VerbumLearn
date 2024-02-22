import { useAppDispatch } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";

export const UserPage = () => {
    const dispatch = useAppDispatch();

    const handlerLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            UserPage
            <button onClick={() => handlerLogout()}>Logout</button>
        </div>
    );
}