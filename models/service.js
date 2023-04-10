'use strict';
const Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.belongsTo(models.Branch);
      Service.belongsTo(models.User);
      Service.hasMany(models.Comment);
      Service.hasMany(models.Reaction);
      Service.hasMany(models.OrderItem);
    }
  }
  Service.init({
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};