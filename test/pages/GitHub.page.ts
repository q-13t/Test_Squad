class GitHubPage {
    get SighUpButton() {
        return $('/html/body/div[1]/div[3]/header/div/div[2]/div/div/a');
    }
    get EmailInputField(){
        return $('#email');
    }
    get PasswordInputField(){
        return $('#password');
    }
    
    get UsernameInputField(){
        return $('#login');
    }
    
    get DropDownMenu(){
        return $('/html/body/div[1]/div[4]/div/main/div/div[2]/div[2]/div/div[2]/div/signup-form/form/div[1]/signups-marketing-consent-fields/div[1]/div[2]/select-panel/dialog-helper/button');        
    }
    
    get USButton(){
        return $('/html/body/div[1]/div[4]/div/main/div/div[2]/div[2]/div/div[2]/div/signup-form/form/div[1]/signups-marketing-consent-fields/div[1]/div[2]/select-panel/dialog-helper/dialog/div[2]/focus-group/div/div[1]/action-list/div/ul/li[233]/button');
    }

    get checkBox(){
        return $('#user_signup\[marketing_consent\]');
    }

    get someHeader(){
        return $('/html/body/div[1]/div[6]/main/react-app/div/div/div/section[5]/div[1]/div[1]/div/div/header/h2/div/span');
    }

    get mercedesButton(){
        return $('/html/body/div[1]/div[6]/main/react-app/div/div/div/section[5]/div[1]/div[4]/div/div/div[2]/a/span/span/div[2]');
    }
    get subscribeButton(){
        return $('/html/body/div[1]/footer/div[1]/div/section/a[2]');
    }
    get pricingButton(){
        return $('/html/body/div[1]/div[3]/header/div/div[2]/div/nav/ul/li[6]/a');
    }

    async scrollIntoHeader(){
        await this.someHeader.scrollIntoView();
    }
    
    async clickSighUpButton() {
        await this.SighUpButton.click();
    }

    async setEmail(email: string) {
        await this.EmailInputField.setValue(email);
    }

    async setPassword(password: string) {
        await this.PasswordInputField.setValue(password);
    }

    async setUsername(username: string) {
        await this.UsernameInputField.setValue(username);
    }

    async scrollIntoUSButton(){
        await this.USButton.scrollIntoView();
    }

    async selectDropDownMenu(){
        await this.DropDownMenu.click();
        await this.scrollIntoUSButton();
        await this.USButton.click();
    }
}

export default new GitHubPage();