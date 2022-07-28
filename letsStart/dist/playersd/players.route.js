"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('Logging Middleware');
    next();
});
app.use(express.json());
app.get('/players', function (req, res) {
    try {
        var players = app_model_1.Player;
        res.status(200).send({
            success: true,
            data: {
                players: players,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get('/players/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        var player = app_model_1.Player.find(function (player) {
            return player.id === id_1;
        });
        res.status(200).send({
            success: true,
            data: {
                player: player
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.post('/players', function (req, res) {
    try {
        var data = req.body;
        app_model_1.Player.push(data);
        res.status(200).send({
            success: true,
            data: { Player: app_model_1.Player },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.use(function (req, res, next) {
    res.send({ error: '없는 주소입니다' });
    next();
});
app.listen(8000, function () {
    console.log('Server on!');
});
//# sourceMappingURL=players.route.js.map