'use strict';

/**
 * demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo.demo');
