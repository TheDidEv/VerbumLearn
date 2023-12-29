type UserModel = {
    Id: string;
    UserName: string;
    Email: string;
}

export default class UserDto {
    Id: string;
    UserName: string;
    Email: string;

    constructor(model: UserModel) {
        this.Id = model.Id;
        this.UserName = model.UserName;
        this.Email = model.Email;
    }
}