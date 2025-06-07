import { expect, test } from "@playwright/test";
import { request } from "http";
import { regres } from "../../global-constants";
import { logger } from "../../config/constants";

test('Deleted - method', async ({request}) => {
    const response = await request.delete(`${regres.DELETE.deleteUser}`, {
        headers: {
            'x-api-key': `${regres.AUTH.X_API_KEY}`,
            'Content-Type': 'application/json'
        }
    })

    expect(response.status()).toBe(204)
    const responeStatus = response.status()
    
    logger.log('Response doesn\' have body' ) 
})