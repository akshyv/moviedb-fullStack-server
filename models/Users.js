module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    // should introduce an user name or id when involving authentication
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // //  association of database Posts and Comments
  Users.associate = (models) => {
    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });
    Users.hasMany(models.Posts, {
      onDelete: "cascade",
    });
  };

  return Users;
};
