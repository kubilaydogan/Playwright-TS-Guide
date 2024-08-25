# Writing tests

**Test = Actions + Assertions**

* Playwright performs a range of `actionability checks` on the elements before making actions.
* It `auto-waits` for all the relevant checks to pass and only then performs the requested action.
* If the required checks do not pass within the given `timeout`, action fails with the `TimeoutError`.


## [Locator Actions](https://playwright.dev/docs/actionability) in Playwright

Playwright provides various locator actions that can be used to interact with elements on a web page. 
Commonly used locator actions are:

1. `click`: Clicks on the element.
2. `fill`: Enters text into an input field.
3. `selectOption`: Selects an option from a dropdown menu.
4. `check`: Checks a checkbox or radio button.
5. `uncheck`: Unchecks a checkbox or radio button.
6. `press`: Presses a keyboard key.
7. `hover`: Hovers over an element.
8. `focus`: Focuses on an element.
9. `type`: Types text into an element.
10. `clear`: Clears the value of an input field.


## [Assertions](https://playwright.dev/docs/test-assertions)

### Auto-retrying assertions
Playwright will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must use them with `await`.

| Assertion                 | Description                |
|---------------------------|----------------------------|
| expect(locator).`toBeAttached()`     | Element is attached        |
| expect(locator).`toBeChecked()`      | Checkbox is checked        |
| expect(locator).`toBeDisabled()`     | Element is disabled        |
| expect(locator).`toBeEditable()`     | Element is editable        |
| expect(locator).`toBeEmpty()`        | Container is empty         |
| expect(locator).`toBeEnabled()`      | Element is enabled         |
| expect(locator).`toBeFocused()`      | Element is focused         |
| expect(locator).`toBeHidden()`       | Element is not visible     |
| expect(locator).`toBeInViewport()`   | Element intersects viewport|
| expect(locator).`toBeVisible()`      | Element is visible         |
| expect(locator).`toContainText()`    | Element contains text      |
| expect(locator).`toHaveAttribute()`  | Element has a DOM attribute|
| expect(locator).`toHaveClass()`      | Element has a class property|
| expect(locator).`toHaveCount()`      | List has exact number of children|
| expect(locator).`toHaveCSS()`        | Element has CSS property   |
| expect(locator).`toHaveId()`         | Element has an ID          |
| expect(locator).`toHaveJSProperty()` | Element has a JavaScript property|
| expect(locator).`toHaveText()`       | Element matches text       |
| expect(locator).`toHaveValue()`      | Input has a value          |
| expect(locator).`toHaveValues()`     | Select has options selected|
| expect(page).`toHaveTitle()`         | Page has a title           |
| expect(page).`toHaveURL()`           | Page has a URL             |
| expect(response).`toBeOK()`          | Response has an OK status  |

<br>

## [Locators](https://playwright.dev/docs/locators)

* `.getByRole()` to locate by explicit and implicit accessibility attributes.
* `.getByText()` to locate by text content.
* `.getByLabel()` to locate a form control by associated label's text.
* `.getByPlaceholder()` to locate an input by placeholder.
* `.getByAltText()` to locate an element, usually image, by its text alternative.
* `.getByTitle()` to locate an element by its title attribute.
* `.getByTestId()` to locate an element based on its data-testid attribute 

```ts
// Create a locator.
const getStarted = page.getByRole('link', { name: 'Get started' });

// Click it.
await getStarted.click();
```
or
```ts
await page.getByRole('link', { name: 'Get started' }).click();
```

```ts
const locator = page
    .frameLocator('#my-frame')
    .getByRole('button', { name: 'Sign in' });

await locator.click();
```


## expect 

Examples of using the `expect` function in Playwright:

```ts
await expect(page.locator('#myElement')).toBeVisible();
await expect(page.locator('#myElement')).toHaveText('Hello, World!');
await expect(page.locator('#myInput')).toHaveValue('example@example.com');
await expect(page.locator('#myElement')).toHaveAttribute('data-testid', 'myTestId');
await expect(page.locator('#myButton')).toBeEnabled();
await expect(page.locator('#myButton')).toBeDisabled();
```


