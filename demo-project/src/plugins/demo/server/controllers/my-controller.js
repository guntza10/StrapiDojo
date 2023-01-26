'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('demo')
      .service('myService')
      .getWelcomeMessage();
  },
});
