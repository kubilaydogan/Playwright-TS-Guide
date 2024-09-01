## [Assertions](https://playwright.dev/docs/test-assertions)

Assertions help ensure that your web application behaves as expected during automated testing with Playwright.

## Auto-retrying assertions
* Playwright will retry until the assertion passes, or the assertion timeout is reached. 
* Note that retrying assertions are async, so you must use them with `await`.

    > **You cannot chain expect assertions** in Playwright. Each expect call must be executed independently.

<!-- | Assertion                                         | Description                            |
|---------------------------------------------------|----------------------------------------|
| expect(locator).`toBeAttached()`                  | Checks if the element is attached (present) |
| expect(locator).not.`toBeAttached()`              | Checks if the element is attached (not present) |
| expect(locator).`toBeChecked()`                   | Asserts that the element is checked (for checkboxes or radio buttons)       |
| expect(locator).`toBeDisabled()`                  | Checks if the element is disabled      |
| expect(locator).`toBeEditable()`                  | Checks if the element is editable      |
| expect(locator).`toBeEmpty()`                     | Checks if the element is empty         |
| expect(locator).`toBeEnabled()`                   | Checks if the element is enabled       |
| expect(locator).`toBeFocused()`                   | Checks if the element is focused       |
| expect(locator).`toBeHidden()`                    | Checks if the element is hidden/not visible |
| expect(locator).`toBeVisible()`                   | Checks if the element is visible       |
| expect(locator).`toBeInViewport()`                | Checks if the element is in viewport   |
| expect(locator).`toContainText('text')`           | Checks if the element contains text    |
| expect(locator).`toHaveAttribute('attr', 'value')`| Checks if the element has attribute    |
| expect(locator).`toHaveClass('class')`            | Checks if the element has a class property |
| expect(locator).`toHaveCount(3)`                  | List has exact number of children      |
| expect(locator).`toHaveCSS('property', 'value')`  | Element has CSS property               |
| expect(locator).`toHaveId('id')`                  | Checks if the element has ID           |
| expect(locator).`toHaveJSProperty('property', 'value')` | Checks the JS property of element |
| expect(locator).`toHaveText('text')`              | Element matches text                   |
| expect(locator).`toHaveValue('value')`            | Input has a value                      |
| expect(locator).`toHaveValues(['value1', 'value2'])` | Select has options selected        |
| expect(page).`toHaveTitle('title')`               | Checks the title of the page           |
| expect(page).`toHaveURL('url')`                   | Checks the URL of the page             |
| expect(response).`toBeOK()`                       | Checks if the response has an OK status|

<br> -->



### Some common [assertions](https://playwright.dev/docs/api/class-locatorassertions) :

- **`toBeChecked`**: Asserts that the element is checked (for checkboxes or radio buttons).

  ```js
  await expect(page.locator('input[type="checkbox"]')).toBeChecked();
  ```

- **`toBeDisabled`**: Asserts that the element is disabled.
    * Element is disabled if it has "`disabled`" attribute or is disabled via '`aria-disabled`'.
    * Note that only button, input, select, textarea, option, optgroup can be disabled by setting "disabled" attribute. 
    * "disabled" attribute on other elements is ignored by the browser.

  ```js
  await expect(page.locator('button')).toBeDisabled();
  ```

- **`toBeEnabled`**: 
  ```js
  await expect(page.locator('button')).toBeEnabled();
  ```

- **`toBeEmpty`**: Asserts that the element is empty (has no text).
  ```js
  await expect(page.locator('div.warning')).toBeEmpty();
  ```

- **`toBeFocused`**: Asserts that the locator points to a focused DOM nod.
  ```js
  await expect(page.getByRole('textbox')).toBeFocused();
  ```

- **`toBeVisible`**: 
    ```js
    // A specific element is visible.
    await expect(page.getByText('Welcome')).toBeVisible();

    // At least one item in the list is visible.
    await expect(page.getByTestId('todo-item').first()).toBeVisible();

    // At least one of the two elements is visible, possibly both.
    await expect(
            page.getByRole('button', { name: 'Sign in' })
                .or(page.getByRole('button', { name: 'Sign up' }))
                .first()
        ).toBeVisible();
    ```

- **`toBeHidden`**: 
  ```js
  await expect(page.locator('div')).toBeHidden();
  ```

- **`toHaveAttribute`**: 
  ```js
  await expect(page.locator('img')).toHaveAttribute('src', 'image.png');
  ```

- **`toHaveClass`**: Asserts that the element has a specific class.
    ```html 
    <div class='selected row' id='component'></div>
    ```
    ```js
    const locator = page.locator('#component');
    await expect(locator).toHaveClass(/selected/);
    await expect(locator).toHaveClass('selected row');
    ```
    Note that if array is passed as an expected value, entire lists of elements can be asserted.


- **`toHaveCount`**: 
  ```js
  await expect(page.locator('li')).toHaveCount(3);
  ```

- **`toHaveCSS`**: Asserts that the element has a specific CSS property with a specific value.
  ```js
  await expect(page.locator('div')).toHaveCSS('display', 'block');
  ```

- **`toHaveText`**: Asserts that the element has specific text.
  ```js
  await expect(page.locator('h1')).toHaveText('Hello, World!');
  await expect(page.locator('h1')).toHaveText('/Hello/');
  await expect(page.locator('...')).not.toHaveText('...');
  ```

- **`toHaveValue`**: Asserts that the element has a specific value (for input elements).
  ```js
  await expect(page.locator('input')).toHaveValue('example');
  ```

- **`toHaveTitle`**: 
  ```js
  await expect(page).toHaveTitle('My Page Title');
  ```

- **`toHaveURL`**: 
  ```js
  await expect(page).toHaveURL('https://example.com');
  ```

- **`toBeAttached`**: Asserts that the element that is connected to a Document or a ShadowRoot.

    ```js
    await expect(page.getByText('Hidden text')).toBeAttached();
    ```
 
- **`toContainText`**:
 
    ```js
    await expect(locator).toContainText('substring');
    await expect(locator).toContainText(/\d messages/);
    ```

    `\d` represents any digit. For example:

    * 1 messages
    * 23 messages
    * 456 messages
    * 7890 messages

    Consider the following list:
    ```html
    <ul>
    <li>Item Text 1</li>
    <li>Item Text 2</li>
    <li>Item Text 3</li>
    </ul>
    ```
    Let's see how we can use the assertion:
    ```js
    // ✓ Contains the right items in the right order
    await expect(page.locator('ul > li')).toContainText(['Text 1', 'Text 3']);

    // ✖ Wrong order
    await expect(page.locator('ul > li')).toContainText(['Text 3', 'Text 2']);

    // ✖ No item contains this text
    await expect(page.locator('ul > li')).toContainText(['Some 33']);

    // ✖ Locator points to the outer list element, not to the list items
    await expect(page.locator('ul')).toContainText(['Text 3']);
    ```

- **`toBeEditable`**: Ensures the Locator points to an editable element.

    ```js
    const locator = page.getByRole('textbox');
    await expect(locator).toBeEditable();
    ```




## [Soft Assertion]()

* In Playwright, `expect.soft` is used to perform a "soft" assertion. 
* Soft assertions do not stop the test execution when they fail. 
* Instead, they log the failure and allow the test to continue running. 
* This can be useful when you want to check multiple conditions and gather all failures.

    #### Example Usage

    ```javascript
    await expect.soft(page.locator('#submit-button')).toBeDisabled();
    await expect.soft(page.locator('#username')).toBeVisible();
    ```

    In this example, both assertions will be checked, and any failures will be logged without stopping the test execution.






