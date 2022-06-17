module.exports = () => {
  return {
    poweredByHeader: false,
    reactStrictMode: true,
    env: {
      VERCEL_ENV: process.env.VERCEL_ENV
    }
  }
}
