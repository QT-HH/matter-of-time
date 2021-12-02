module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4562cd70a8f22a2c483346d065a8625'),
  },
});
