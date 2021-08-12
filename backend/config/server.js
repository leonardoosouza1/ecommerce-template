module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', '0000'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '03393ef55c3e50cb086a18ab65e24a50'),
    },
  },
});
