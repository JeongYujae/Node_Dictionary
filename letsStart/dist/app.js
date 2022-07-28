"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    res.send({ name: '정', age: 22 });
});
app.post('/', function (req, res) {
    res.send({ '포스트로 보낸 객체': 2022 });
});
app.listen(port, function () {
    console.log("Example app listening on port http://localhost:" + port);
});
//# sourceMappingURL=app.js.map