'use strict';

/**
 * special-care service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special-care.special-care');
