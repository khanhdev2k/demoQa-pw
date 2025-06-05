// lib/apiClient.ts
import { APIRequestContext, request } from '@playwright/test';
import { BASE_URL_API } from '../global-constants';

class APIClient {
    private request: APIRequestContext;

    async init() {
        this.request = await request.newContext({
            baseURL: BASE_URL_API,
            extraHTTPHeaders: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }

    async dispose() {
        await this.request.dispose();
    }

    async get(endpoint: string, params?: Record<string, string | number>) {
        return this.request.get(endpoint, { params });
    }
}

export default new APIClient();