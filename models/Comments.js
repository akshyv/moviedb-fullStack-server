module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    //this is the database name
    // should introduce an user name or id when involving authentication
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
