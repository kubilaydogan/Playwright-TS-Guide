import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly USERNAME_FIELD: Locator;
    readonly PASSWORD_FIELD: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly LOGIN_MESSAGE_FIELD: Locator;
    readonly TITLE: Locator;
    readonly LOGIN_FAILURE_MESSAGE: RegExp; 
    readonly OPEN_MENU: Locator;
    readonly LOGOUT_BUTTON: Locator;

    constructor(page: Page){
        this.page = page
        this.USERNAME_FIELD = page.locator('[data-test="username"]')
        this.PASSWORD_FIELD = page.locator('[data-test="password"]')
        this.LOGIN_BUTTON = page.locator('[data-test="login-button"]')
        this.LOGIN_MESSAGE_FIELD = page.locator('[data-test="error"]')
        this.TITLE = page.locator('.title')
        this.LOGIN_FAILURE_MESSAGE = /Username and password do not match any user in this service/ 
        this.OPEN_MENU = page.getByRole('button', { name: 'Open Menu' })
        this.LOGOUT_BUTTON = page.locator('[data-test="logout-sidebar-link"]')
    }

    async goToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {  
        await this.USERNAME_FIELD.fill(username, { timeout: 5000 });
        await this.PASSWORD_FIELD.fill(password, { timeout: 5000 });
        await this.LOGIN_BUTTON.click();
    }

    async logout() {  
        await this.OPEN_MENU.click();
        await this.LOGOUT_BUTTON.click();
    }

    async verifyTitle(text: string){
        const title = await this.TITLE.textContent();
        expect(title).toContain(`${text}`);
    }
    
    async verifySuccessfulLogin(){
        const title = await this.TITLE.textContent();
        expect(title).toContain('Products');
    }

    async verifyLoginFailMessage(){
        expect(this.LOGIN_MESSAGE_FIELD).toHaveText(this.LOGIN_FAILURE_MESSAGE)
        expect(this.LOGIN_MESSAGE_FIELD).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }
}