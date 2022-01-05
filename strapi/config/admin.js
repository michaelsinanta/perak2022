module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '85eb710a6d80eeabd1b9b6222eed8dcb'),
  },
});
