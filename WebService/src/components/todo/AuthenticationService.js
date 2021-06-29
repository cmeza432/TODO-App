// Helps to check if user has logged in
class AuthenticationService {
    registerSuccessfulLogin(username){
        console.log('Register Successful');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        return (user===null ? false : true);
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser');
        return (user===null ? '' : user);
    }
}

export default new AuthenticationService()