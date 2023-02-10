'use strict';

/**
 * strike service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strike.strike');
