const env = process.env.VERCEL_ENV

export const isDevelopment = env === 'development'
export const isProduction = env === 'production'
export const isPreview = env === 'preview'
export const domain = 'https://example.com'
