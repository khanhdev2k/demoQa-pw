import {test, expect} from '@playwright/test'
import { regres } from '../../global-constants'
import { logger } from '../../config/constants'
import { Utils } from '../../utils/utils'

test(" PUT - method", async ({request}) => {
    const response = await request.put(`${regres.PUT.update}`, {
        headers: {
            'x-api-key': `${regres.AUTH.X_API_KEY}`,
            'Content-Type': 'application/json'
        },
        data: {
            name: "khanhleduy",
            job: 'shipper'
        }
    })

    expect(response.status()).toBe(200)

    const responeBody = await response.json()
    logger.log('ResponeBody: ' + Utils.prettyJSON(responeBody)) 
})