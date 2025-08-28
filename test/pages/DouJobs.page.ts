class DouJobs {
    get searchButton() {
        return $('//*[@id="container"]/div[1]/div[2]/div[2]/form/input');
    }

    get fastNavLabel(){
        return $('//*[@id="container"]/div[1]/div[2]/div[2]/form/div');
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
    }
}

export default new DouJobs();