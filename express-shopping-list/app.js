const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
const routes = require("./routes")

app.use("/items", routes);


app.use(function (err, req, res, next) {

    let status = err.status || 500;
    return res.status(status).json({
      error: {
        message: err.message,
        status: status
      }
    });
});



app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});