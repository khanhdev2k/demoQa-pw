import { test, expect} from '@playwright/test'
import { request } from 'http'
import { logger } from '../../config/constants';
import { regres } from '../../global-constants';
import { Utils } from '../../utils/utils';


test('Post method - create user', async ({ request }) => {
    const response = await request.post(`${regres.POST.create}/users`, {
      headers: {
        'x-api-key': regres.AUTH.X_API_KEY,
        'Content-Type': 'application/json',
      },
      data: {
        name: "morpheus",
        job: "leader"
      }
    });
  
    expect(response.status()).toBe(201);
    const responseBody = await response.json();

    console.log('Response JSON:\n', Utils.prettyJSON(responseBody));

    expect(responseBody).toHaveProperty('name', 'morpheus');
    expect(responseBody).toHaveProperty('job', 'leader');
    expect(responseBody).toHaveProperty('id'); // assuming response includes an ID
    expect(responseBody).toHaveProperty('createdAt'); // assuming response includes timestamp
  });