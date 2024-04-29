"use strict";

var _express = _interopRequireDefault(require("express"));

var _colors = _interopRequireDefault(require("colors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _authRoute = _interopRequireDefault(require("./routes/authRoute.js"));

var _categoryRoute = _interopRequireDefault(require("./routes/categoryRoute.js"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes.js"));

var _url = require("url");

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); //database config


(0, _db["default"])(); // const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);

var app = (0, _express["default"])(); //middleware

app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev')); //routes

app.use('/api/v1/auth', _authRoute["default"]);
app.use('/api/v1/category', _categoryRoute["default"]);
app.use('/api/v1/product', _productRoutes["default"]);
app.use('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "./client/build/index.html"));
});
app.get('/', function (req, res) {
  res.send({
    message: "<h1>hello world welcome to new ecommerce app</h1>"
  });
}); //port

var PORT = process.env.PORT || 8080; //run listen

app.listen(PORT, function () {
  console.log("Server running on ".concat(PORT).bgCyan.white);
});