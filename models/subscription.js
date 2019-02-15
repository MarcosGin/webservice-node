'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
      endUserId: DataTypes.STRING,
      subscriptionId: DataTypes.STRING,
      serviceId: DataTypes.STRING,
      serviceIdentifierId: DataTypes.STRING,
      identifierId: DataTypes.STRING,
      identifierLabel: DataTypes.STRING,
      identifierClass: DataTypes.STRING,
      landingId: DataTypes.STRING,
      referenceCode: DataTypes.STRING,
      trackingParam: DataTypes.STRING,
      subscriptionPeriodicity: DataTypes.STRING,
      subscriptionStartDateTime: DataTypes.DATE,
      subscriptionValidUntilDateTime: DataTypes.DATE,
      subscriptionCancellationDateTime: DataTypes.DATE
  }, {
    timestamp:false
  });
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};