'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../db/models/product.model');
const { CategorySchema, CATEGORY_TABLE } = require('./../db/models/category.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
