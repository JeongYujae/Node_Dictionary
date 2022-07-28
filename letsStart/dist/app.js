"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var players_route_1 = require("./Players/players.route");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('Logging Middleware');
    next();
});
app.use(express.json());
app.use(players_route_1.default);
app.use(function (req, res, next) {
    res.send({ error: '없는 주소입니다' });
    next();
});
app.listen(8000, function () {
    console.log('Server on!');
});
//# sourceMappingURL=app.js.map