'use strict';

/**
 * rev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rev.rev');
