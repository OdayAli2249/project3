'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'subscribtions',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    )
      .then(() => {
        return queryInterface.addColumn(
          'subscribtions',
          'serviceProviderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'service_providers',
              key: 'id',
            },
            // onUpdate: 'CASCADE',
            // onDelete: 'SET NULL',
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'user_branches',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'user_branches',
          'branchId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'branches',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'branches',
          'serviceProviderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'service_providers',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'posts',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'posts',
          'branchId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'branches',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'services',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'services',
          'branchId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'branches',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'products',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'products',
          'branchId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'branches',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'reactions',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'reactions',
          'serviceProviderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'service_providers',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'reactions',
          'postId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'posts',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'reactions',
          'serviceId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'services',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'comments',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'comments',
          'serviceProviderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'service_providers',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'comments',
          'postId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'posts',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'comments',
          'serviceId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'services',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'replies',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'replies',
          'serviceProviderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'service_providers',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'replies',
          'commentId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'comments',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'orders',
          'userId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'order_items',
          'orderId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'orders',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'order_items',
          'serviceId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'services',
              key: 'id',
            },
          }
        );
      }).then(() => {
        return queryInterface.addColumn(
          'order_items',
          'productId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'products',
              key: 'id',
            },
          }
        );
      })
  },

  async down(queryInterface, Sequelize) {
    // return queryInterface.removeColumn(
    //   'Orders', // name of Source model
    //   'CustomerId' // key we want to remove
    // ).then(() => {
    //   queryInterface.removeColumn(
    //     'Orders', // name of Source model
    //     'PaymentId' // key we want to remove
    //   )
    // })
  }
};