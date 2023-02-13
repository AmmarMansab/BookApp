const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-routes");

// Middlewares
app.use(express.json());
/*app.use("/", (require, response, next) => {
    require.send("This our starting app.");
});*/
app.use("/books", router); // localhost:5000/books


mongoose
  .connect(
    "mongodb+srv://admin:pYSQc8pirT0mAZLj@cluster0.tzkzlt8.mongodb.net/book-Store?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));