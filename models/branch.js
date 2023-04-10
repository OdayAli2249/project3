'use strict';
const Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Branch.belongsToMany(models.User, { through: models.UserBranch });
      Branch.belongsTo(models.ServiceProvider);
      Branch.hasMany(models.Service, {
        foreignKey: {
          allowNull: false
        }
      });
      Branch.hasMany(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  Branch.init({
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
    modelName: 'Branch',
  });
  return Branch;
};