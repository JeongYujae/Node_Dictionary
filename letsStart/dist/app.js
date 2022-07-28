"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    next();
});
app.get('/', function (req, res) {
    res.send({ List: app_model_1.List });
});
app.get('/List/blue', function (req, res) {
    res.send({ blue: app_model_1.List[0] });
});
app.get('/List/som', function (req, res) {
    res.send({ som: app_model_1.List[1] });
});
app.use(function (req, res, next) {
    res.send({ error: '없는 주소입니다' });
    next();
});
app.listen(8000, function () {
    console.log('Server on!');
});
//# sourceMappingURL=app.js.map