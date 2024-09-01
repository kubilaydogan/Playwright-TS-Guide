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

---
**Test = Actions + Assertions**

* Playwright performs a range of `actionability checks` on the elements before making actions.
* It `auto-waits` for all the relevant checks to pass and only then performs the requested action.
* If the required checks do not pass within the given `timeout`, action fails with the `TimeoutError`.
---

## Click

```ts
// Click the get started link.
await page.getByRole('link', { name: 'Get started' }).click();
```

## ...
