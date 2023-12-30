type UserModel = {
    Id: string;
    UserName: string;
    Email: string;
    Activated: boolean;
    ActivationLink: string;
}

export default class UserDto {
    Id: string;
    UserName: string;
    Email: string;
    ActivationLink: string;
    Activated: boolean;

    constructor(model: UserModel) {
        this.Id = model.Id;
        this.UserName = model.UserName;
        this.Email = model.Email;
        this.ActivationLink = model.ActivationLink;
        this.Activated = model.Activated;
    }
}