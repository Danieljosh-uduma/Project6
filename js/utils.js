// Registion functionality - code refactoring

export class User {
    constructor (userName, email, password, phoneNumber) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.login = false;
    }
    signUp() {
        localStorage.setItem('username', this.userName);
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        localStorage.setItem('phoneNumber', this.phoneNumber);
    }
    logIn(username, password) {
        if (username == this.userName && password == this.password) {
            this.login = true;
            location.href = '/home.html';
        }
        else {
            return this.logIn;    
        }
    }
    logout() {
        this.login = fasle;
        location.href = '/login.html'
    }
}

// messages
export let messages = [
    'No spaces allowed, use underscore instead',
    'incorrect password or username',
    'invalid User',
    'username must start with @ character',
    'password must be up to 8 characters',
]