'use strict';

/**
 * demo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::demo.demo');
