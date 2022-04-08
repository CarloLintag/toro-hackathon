module.exports = (sequelize, type) => {
    return sequelize.define('vacationleave', {
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