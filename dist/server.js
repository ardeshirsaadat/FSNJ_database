"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var bookModelHandler_1 = __importDefault(require("./handlers/bookModelHandler"));
var app = express_1["default"]();
var address = "0.0.0.0:3000";
// app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log("starting app on: " + address);
});
bookModelHandler_1["default"](app);
