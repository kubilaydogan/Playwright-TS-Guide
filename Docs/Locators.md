## [Locators](https://playwright.dev/docs/locators)

* `.getByRole()` to locate by explicit and implicit accessibility attributes.
* `.getByText()` to locate by text content.
* `.getByLabel()` to locate a form control by associated label's text.
* `.getByPlaceholder()` to locate an input by placeholder.
* `.getByAltText()` to locate an element, usually image, by its text alternative.
* `.getByTitle()` to locate an element by its title attribute.
* `.getByTestId()` to locate an element based on its data-testid attribute 

### Examples
```ts
// Create a locator.
const getStarted = page.getByRole('link', { name: 'Get started' });
await getStarted.click();
```
or
```ts
await page.getByRole('link', { name: 'Get started' }).click();
```

```ts
const locator = page.frameLocator('#my-frame')
                        .getByRole('button', { name: 'Sign in' });

await locator.click();
```


### Examples
```js
await page.locator('id=user-name')
await page.locator('[id="user-name"]')
await page.locator('#user-name')

// using text
await page.locator('text=LOGIN')
await page.locator('input:has-text=LOGIN')

// for xpath usage: 
await page.locator('xpath=//input[@name="password"]').fill('secret_sauce');
await page.locator('//input[@name="password"]').fill('secret_sauce');
```

```js
await page.getByLabel('Password').fill('password');
await expect(page.getByText('Welcome, John!')).toBeVisible();

page.getByRole('heading', { name: 'Installations' })

const locator = page.getByRole('button', { name: 'Sign in' });
await locator.hover();
await locator.click();

```