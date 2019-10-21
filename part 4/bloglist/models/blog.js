const mongoose = require('mongoose')
const config=require('../utils/config')

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
  mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(res => console.log("Successfully connected"))
  .catch(err => console.log("Connection to Mongodb failed"))
  
  module.exports=mongoose.model('Blog', blogSchema);