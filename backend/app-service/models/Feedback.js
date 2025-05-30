const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Feedback = sequelize.define(
  "Feedback",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    roomId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "In-Progress", "Done"),
      defaultValue: "Pending",
      allowNull: false,
    },
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci",
    tableName: "feedbacks",
    timestamps: false,
  }
);

module.exports = { Feedback };
