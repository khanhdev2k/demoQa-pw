import { test, expect } from '@playwright/test';
import { request } from 'http';
import { BASE_URL_API, regres } from '../../global-constants';


test('GET users - successful request', async ({request}) => {
  // 1. Make the API call
  const response = await request.get(`${regres.GET.list_user}`);
  
  // 2. Verify status code
  expect(response.status()).toBe(200);
  
  // 3. Parse and verify response
  const body = await response.json();
  console.log('API Response:', body);
  
  // 4. Validate response structure
  expect(body).toHaveProperty('page');
  expect(body).toHaveProperty('data');
  expect(Array.isArray(body.data)).toBeTruthy();
});
