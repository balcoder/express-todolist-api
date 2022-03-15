const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(
  "mongodb+srv://balcoder:SquidTodo101@cluster0.fj65c.mongodb.net/todoList2?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.Promise = Promise; //  alows us use the promise syntax .then instead of having to write callback function(){}

// export our Todo model
module.exports.Todo = require("./todo");
