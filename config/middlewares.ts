export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  // Middleware custom
  // {
  //   name: 'global::revalidate',
  //   config: {},
  // },
  {
    resolve: '../middlewares/revalidate.ts',
    config: {},
  },
];
