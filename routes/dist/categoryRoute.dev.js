"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authMiddleware = require("../middlewares/authMiddleware.js");

var _categoryController = require("../controllers/categoryController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //routes 
//create category


router.post('/create-category', _categoryController.createCategoryController); //update category

router.put('/update-category/:id', _categoryController.updateCategoryController); //get all category

router.get('/get-category', _categoryController.categoryControlller); //single category

router.get('/single-category/:slug', _categoryController.singleCategoryController); //delete route

router["delete"]('/delete-category/:id', _categoryController.deleteCategoryController);
var _default = router;
exports["default"] = _default;