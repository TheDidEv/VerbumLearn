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

type MainWord = {
    Id: string,
    Word: string,
    Translate: string
}

type WrongWords = {
    Word: string,
    Translate: string

}
export {
    UserType,
    WordType,
    MainWord,
    WrongWords,
}