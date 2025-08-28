class LoginPage {
    get inputUsername() {
        return $('input[name="username"]');
    }
    get inputPassword() {
        return $('input[name="password"]');
    }
    get btnSubmit() {
        return $('button[type="submit"]');
    }

    async setUsername(username: string) {
        await this.inputUsername.setValue(username);
    }

    async setPassword(password: string) {
        await this.inputPassword.setValue(password);
    }

    async clickSubmit() {
        await this.btnSubmit.click();
    }
}

export default new LoginPage();