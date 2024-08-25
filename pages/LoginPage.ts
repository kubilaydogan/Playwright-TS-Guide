import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly USERNAME_FIELD: Locator;
    readonly PASSWORD_FIELD: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly LOGIN_MESSAGE_FIELD: Locator;
    readonly LOGIN_SUCCESS_MESSAGE: RegExp;


    constructor(page){
        this.page = page
        this.USERNAME_FIELD = page.getByLabel('Username')
        this.PASSWORD_FIELD = page.getByLabel('Password')
        this.LOGIN_BUTTON = page.getByRole('button', {name: 'Login'})
        this.LOGIN_MESSAGE_FIELD = page.locator('#flash')
        this.LOGIN_SUCCESS_MESSAGE = /You logged into a secure area!/
    }

    async goToLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username, password){
        await this.USERNAME_FIELD.fill(username)
        await this.PASSWORD_FIELD.fill(password)
        await this.LOGIN_BUTTON.click()

    }

    async verifyLoginMessage(text: string){
        const actualMessage = await this.LOGIN_MESSAGE_FIELD.textContent();
        expect(actualMessage).toContain(`${text}`); 
    }

    async verifySuccessfulLogin(){
        await expect(this.LOGIN_MESSAGE_FIELD).toHaveText(this.LOGIN_SUCCESS_MESSAGE)
    }
}