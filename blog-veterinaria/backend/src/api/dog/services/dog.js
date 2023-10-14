'use strict';

/**
 * dog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dog.dog');
