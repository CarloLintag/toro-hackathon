module.exports = (sequelize, type) => {
    return sequelize.define('employee_info', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      hourlyRate: {
          type: type.BIGINT(20),
          allowNull: false,
      },
      sickLeaveCredits:{
        type: type.BIGINT(20),
        allowNull: false,
      },
      vacationLeaveCredits:{
        type: type.BIGINT(20),
        allowNull: false,
      }
    })
  }
  