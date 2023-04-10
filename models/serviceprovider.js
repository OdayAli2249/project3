'use strict';
const Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceProvider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServiceProvider.belongsToMany(models.User, { through: models.Subscribtion });
      ServiceProvider.hasMany(models.Branch, {
        foreignKey: {
          allowNull: false
        }
      });
      ServiceProvider.hasMany(models.Comment);
      ServiceProvider.hasMany(models.Reaction);
      ServiceProvider.hasMany(models.Reply);
    }
  }
  ServiceProvider.init({
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
    modelName: 'ServiceProvider',
  });
  return ServiceProvider;
};