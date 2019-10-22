var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  id: String,
  datos: {
    type: Object,
    required: true
  }
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;