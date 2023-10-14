'use strict';

/**
 * dog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dog.dog');
