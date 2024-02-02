//register/login/logout actions
interface UserState {
    users: any[];
}

const defaultState: UserState = {
    users: []
}

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const userReducer = (state = defaultState, action: any) => {

}
