import { ApiConfig } from './app-model.config';

export const apiConfig : ApiConfig = {
    defaults: {
        timeout: 120000,
        retyCount: 3,
        retryDelay: 3000,
        retryTimeout: 5000
    },
    cares: {
        getOTP: `/webhttp/OTPGenerator`,
        verifyOTP: `/webhttp/OTPVerification`
    },
    csp: {
        createSR: ``
    }
}