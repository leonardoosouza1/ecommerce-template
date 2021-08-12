module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '03393ef55c3e50cb086a18ab65e24a50'),
    },
  },
});
