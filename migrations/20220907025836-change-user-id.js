'use strict';

const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('./../db/models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      field: 'user_id',
      unique: true,
      type: DataTypes.INTEGER,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      field: 'user_id',
      unique: false,
      type: DataTypes.INTEGER,
    });
  }
};
