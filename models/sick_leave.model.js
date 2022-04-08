module.exports = (sequelize, type) => {
    return sequelize.define('sickleave', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: type.DATE,
        allowNull: false,
      },
    })
  }