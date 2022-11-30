'use strict';

/**
 * submit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::submit.submit');
