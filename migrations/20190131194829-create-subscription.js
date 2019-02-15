'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Subscriptions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        endUserId: {
          type: Sequelize.STRING
        },
        subscriptionId: {
          type: Sequelize.STRING
        },
        serviceId: {
          type: Sequelize.STRING
        },
        serviceIdentifierId: {
          type: Sequelize.STRING
        },
        identifierId: {
          type: Sequelize.STRING
        },
        identifierLabel: {
          type: Sequelize.STRING
        },
        identifierClass: {
          type: Sequelize.STRING
        },
        landingId: {
          type: Sequelize.STRING
        },
        referenceCode: {
          type: Sequelize.STRING
        },
        trackingParam: {
          type: Sequelize.STRING
        },
        subscriptionPeriodicity: {
          type: Sequelize.STRING
        },
        subscriptionStartDateTime: {
          type: Sequelize.DATE
        },
        subscriptionValidUntilDateTime: {
          type: Sequelize.DATE
        },
        subscriptionCancellationDateTime: {
          type: Sequelize.DATE
        }
    }, {
      timestamp: false
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subscriptions');
  }
};