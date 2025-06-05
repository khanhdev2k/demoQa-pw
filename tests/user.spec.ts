// tests/users.spec.ts
import { test, expect, request } from '@playwright/test';
import apiClient from '../lib/apiClient';

test.beforeAll(async () => {
    await apiClient.init();
});

test.afterAll(async () => {
    await apiClient.dispose();
});

test('GET /users?page=2 should return page 2 data', async ({request}) => {
    // 1. Make the GET request
    const response = await request.get("https://reqres.in/api/users?page=2");
    
    // 2. Verify status code
    expect(response.status()).toBe(200);
    
    // 3. Parse and verify response body
    const responseBody = await response.json();
    
    expect(responseBody).toHaveProperty('page', 2);
    expect(responseBody).toHaveProperty('per_page', 6);
    expect(responseBody).toHaveProperty('total', 12);
    expect(responseBody.data).toBeInstanceOf(Array);
    expect(responseBody.data.length).toBe(6);
    
    // 4. Verify a sample user
    const firstUser = responseBody.data[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('last_name');
    expect(firstUser).toHaveProperty('avatar');
});