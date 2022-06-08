interface AuthObj {
    username: string,
    password: string,
    email?: string, //Makes email optional for an AuthObj
}
//Used for login / create user

export default AuthObj