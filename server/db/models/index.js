const User = require('./user')
const Class = require('./01classes')
const ClassDetail = require('./02classDetail')
const EmailList = require('./emailList')

ClassDetail.belongsTo(Class)

module.exports = {
  User,
  Class,
  ClassDetail,
  EmailList
}
