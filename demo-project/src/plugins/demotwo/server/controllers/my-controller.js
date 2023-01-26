'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('demotwo')
      .service('myService')
      .getWelcomeMessage();
  },
});
