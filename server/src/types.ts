type UserType = {
    Id: string;
    UserName: string;
    Password: string
    Email: string;
    Activated: boolean;
    ActivationLink: string;
}

type WordType = {
    Id: string;
    Word: string;
    Translate: string;
    IntermediateWWordCollectionName: string;
}

export {
    UserType,
    WordType,
}