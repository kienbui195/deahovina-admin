'use strict';

/**
 * customer-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-site.customer-site');
