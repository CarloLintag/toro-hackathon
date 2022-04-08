module.exports = (sequelize, type) => {
    return sequelize.define('account', {
      id: {
        type: type.BIGINT(20),
        unique: true,
      },
      firstName:{
        type: type.STRING,
        allowNull: false,
      },
      lastName:{
        type: type.STRING,
        allowNull: false,
      },
      email:{
        type: type.STRING,
        primaryKey: true,
      },
      password:{
        type: type.STRING,
        allowNull: false,
      },
      clearanceLevel:{
        type: type.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false
    }
    )
  }