import sequelize from "../utils/db.js";
import { Sequelize } from "sequelize";
import User from "./userModel.js";

const Contact = sequelize.define(
  "Contact",
  {
    contactId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    fullName: {
      type: Sequelize.VIRTUAL,
      get() {
        return this.firstName + " " + this.lastName;
      },
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      set(value) {
        this.setDataValue("email", value.toLowerCase());
      },
    },
    phone: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "contact",
    underscored: true,
  }
);

User.hasMany(Contact, {
  foreignKey: "userId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

Contact.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

sequelize.sync();

export default Contact;