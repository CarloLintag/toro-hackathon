module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
      },
      firstName: {
        type: type.STRING,
        allowNull: false,
      },
      lastName: {
        type: type.STRING,
        allowNull: false,
      },
      position: {
        type: type.STRING,
        allowNull: false,
      },
      sickLeaveCredits: {
        type: type.INTEGER,
        allowNull: false
      },
      vacationLeaveCredits: {
        type: type.INTEGER,
        allowNull: false
      },
      hourlyRate: {
        type: type.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false
    }
    )
  }
  