export class LoginModel {
    Email = ""
    Password = ""
    LoginModel(email, pass) {
        this.Email = email;
        this.Password = pass;
    }
    setEmail(email) {
        this.Email = email;
    }
    setPassWord(pass) {
        this.Password = pass;
    }
    getEmail() {
        return this.Email;
    }
    getPassWord() {
        return this.Password;
    }
}