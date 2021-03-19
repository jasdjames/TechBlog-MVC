const Session = require()
const Users = require()
const Posts = require()
const Comments = require ()



Users.hasMany(Post,Comments{

})

Posts.hasMany(Comments,{

})

Post.belongsTo(Users,{
foreignKey:"userId",
onDelete: 'CASCADE',
onUpdate: 'CASCADE'

})

Comments.belongsTo(Users,{


})

Session.belongsTo(Users,{
foreignKey:"sid"
})

module.exports = {Users, Post, Comments, Session}