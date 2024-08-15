const mongoose = require("mongoose");
const schema = mongoose.schema;

const blogSchema = new schema({
  title: {
    type: String,
    unique: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: Text,
  },
  Image: {
    type: String,
  },
});
 
 const Blog = mongoose.model('Blog',blogSchema);
 
module.exports = {
    Blog
}

