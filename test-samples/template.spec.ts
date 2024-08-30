import { test, expect} from '@playwright/test';

// Hooks can take 1 or 2 arguments: 
// (1) Fixtures
// (2) TestInfo.

test.beforeAll(async () => {
    console.log('Before all tests');
});

test.beforeAll('Setup', async () => {
    // Declare a hook with a title
    // multiple beforeAll hooks are executed in the order they are declared 
    console.log('Setup all tests');
});

test.afterAll(async () => {
    // ...
});


test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting: ${testInfo.title}`);
    // Extend timeout for all tests by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 30000);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('first', async ({ page }, testInfo) => {
    expect(testInfo.title).toBe('first');
});

test('second', async ({ page }) => {
    // ...
});

test.only('third', async ({ page }) => {
    // ...
});
