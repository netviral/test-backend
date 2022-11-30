'use strict';

/**
 * fiction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fiction.fiction');
