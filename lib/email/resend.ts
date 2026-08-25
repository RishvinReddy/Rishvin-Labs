import { Resend } from 'resend';

// Only instantiate Resend if the API key is available
const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;
