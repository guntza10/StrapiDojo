'use strict';

/**
 * rev-two service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rev-two.rev-two');
