module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_KEY: process.env.JWT_KEY,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};
