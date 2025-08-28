class DouMain {
    get salariesButton(){
        return $('/html/body/div/header/ul/li[4]/a');
    }

    get jobsButton(){
        return $('//*[@id="container"]/div[1]/header/ul/li[5]/a');
    }

    get firstQuartile(){
        return $('//*[@id="q1"]/h4');
    }

    async clickOnSalariesButton() {
        await this.salariesButton.click();
    }
    async clickOnJobsButton() {
        await this.jobsButton.click();
    }
}

export default new DouMain(); 