const Session = require('./Session');
const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Users.hasMany(Posts, Comments, {});

Posts.hasMany(Comments, {});

Posts.belongsTo(Users, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Comments.belongsToMany(Users, {
  through: {
    model: Posts,
    foreignKey: 'postId',
    foreignKey: 'userId',
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Session.belongsTo(Users, {
  foreignKey: 'sid',
});

module.exports = { Users, Posts, Comments, Session };
