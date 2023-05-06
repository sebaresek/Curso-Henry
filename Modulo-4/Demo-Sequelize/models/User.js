const { DataTypes } = require("sequelize");

module.exports = (sqz) => {
  sqz.define("User", {
    name: {
      type: DataTypes.STRING,
      get() {
        const data = this.getDataValue("name");
        return data + "siiiiiiiiiii";
      },
    },
    email: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue("email", value.toLowerCase());
      },
    },
    otra: {
      type: DataTypes.VIRTUAL,
      get() {
        const data = this.getDataValue("name");
        return data + "siiiiiiiiiii";
      },
    },
  },{
    hooks:{

    }
  });
};
