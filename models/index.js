const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

// Users.hasMany(Posts, {
//   foreignKey: 'userId',
// });
Posts.hasMany(Comments, {
  foreignKey: 'postID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Posts.belongsTo(Users, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Comments.belongsTo(Users, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Comments.belongsTo(Posts, {
  foreignKey: 'postId',
});

// Comments.belongsToMany(Users, {
//   through: {
//     model: Posts,
//     foreignKey: 'postId',
//     foreignKey: 'userId',
//   },
// });

// Session.belongsTo(Users, {
//   foreignKey: 'sid',
// });

module.exports = { Users, Posts, Comments };
