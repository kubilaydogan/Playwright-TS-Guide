import { test, expect } from '@playwright/test';

test('@API POST request', async ({ request }) => {
    const requestBody = {
        id: 1,
        name: 'doggie',
        status: 'available'
    };

    const response = await request.post("https://petstore.swagger.io/v2/pet", {
        data: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
    });

    expect(response.status()).toBe(200);
    expect(response).toBeOK();

    const responseBody = await response.json();
    expect(responseBody.id).toBe(requestBody.id);
    expect(responseBody.name).toBe(requestBody.name);
    expect(responseBody.status).toBe(requestBody.status);
});

// test('@API PUT request', async ({ request }) => {
//     const requestBody = {
//         id: 1,
//         name: 'doggie',
//         status: 'sold'
//     };

//     const response = await request.put("https://petstore.swagger.io/v2/pet", {
//         body: JSON.stringify(requestBody),
//         headers: { 'Content-Type': 'application/json' }
//     });

//     expect(response.status()).toBe(200);
//     expect(response).toBeOK();

//     const responseBody = await response.json();
//     expect(responseBody.id).toBe(requestBody.id);
//     expect(responseBody.name).toBe(requestBody.name);
//     expect(responseBody.status).toBe(requestBody.status);
// });

test('@API DELETE request', async ({ request }) => {
    const petId = 1;

    const response = await request.delete(`https://petstore.swagger.io/v2/pet/${petId}`);

    expect(response.status()).toBe(200);
    expect(response).toBeOK();

    const responseBody = await response.json();
    expect(responseBody.code).toBe(200);
    expect(responseBody.type).toBe('unknown');
    expect(responseBody.message).toBe(String(petId));
});
